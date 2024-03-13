import React, { useState, useEffect } from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [tags, setTags] = useState({});
    const [categories, setCategories] = useState({});
    const [allCategories, setAllCategories] = useState([]);
    const [allTags, setAllTags] = useState([]);
    const [slides, setSlides] = useState([]);
    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/blogs/get_all_blogs?page=${currentPage}`);
                setBlogs(response.data.blogs);
                setTotalPages(response.data.totalPages);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch blogs');
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [currentPage]);




    useEffect(() => {
        const fetchCategoriesAndTags = async () => {
            try {
                const categoriesResponse = await axios.get('http://localhost:8080/api/v1/categories-blog/get-all-categoriesBlog');
                const tagsResponse = await axios.get('http://localhost:8080/api/v1/tags-blog/get-all');

                setAllCategories(categoriesResponse.data);
                setAllTags(tagsResponse.data);
            } catch (error) {
                console.error('Failed to fetch categories and tags', error);
            }
        };

        fetchCategoriesAndTags();
    }, []);


    const fetchTag = async (tagId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/tags-blog/${tagId}`);
            setTags(prevState => ({
                ...prevState,
                [tagId]: response.data
            }));
        } catch (error) {
            console.error(`Failed to fetch tag with id ${tagId}`, error);
        }
    };

    useEffect(() => {
        blogs.forEach(blog => {
            blog.tagBlogIds.forEach(tagId => {
                if (!tags[tagId]) {
                    fetchTag(tagId);
                }
            });
        });
    }, [blogs]);



    const fetchTag2 = async (categoryId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/categories-blog/${categoryId}`);
            setCategories(prevState => ({
                ...prevState,
                [categoryId]: response.data
            }));
        } catch (error) {
            console.error(`Failed to fetch categoryId with id ${categoryId}`, error);
        }
    };

    useEffect(() => {
        blogs.forEach(blog => {
            blog.categoryBlogIds.forEach(categoryId => {
                if (!categories[categoryId]) {
                    fetchTag2(categoryId);
                }
            });
        });
    }, [blogs]);



    useEffect(() => {
        fetch('http://localhost:8080/api/v1/blogs/latest-three-blogs')
            .then(response => response.json())
            .then(data => setSlides(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const generatePageNumbers = () => {
        const maxPagesToShow = 4;
        const firstPageIndex = Math.max(0, currentPage - 1);
        const lastPageIndex = Math.min(totalPages - 1, firstPageIndex + maxPagesToShow - 1);

        const pageNumbers = [];

        for (let i = firstPageIndex; i <= lastPageIndex; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    const renderPaginationButtons = () => {
        return generatePageNumbers().map(page => (
            <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(page)}>{page + 1}</button>
            </li>
        ));
    };

    const handleNextButtonClick = () => {
        handlePageChange(currentPage + 1);
    };

    const handlePrevButtonClick = () => {
        handlePageChange(currentPage - 1);
    };

    const handleDeleteBlog = async (blogId) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/blogs/delete_blog/${blogId}`);
            console.log('Blog deleted successfully:', response.data);
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };



    return (
        <>
            <TopNavbar />
            {/* Start Content*/}
            <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Blogs</a></li>
                                    <li className="breadcrumb-item active">BlogList</li>
                                </ol>
                            </div>
                            <h4 className="page-title">BlogList</h4>
                        </div>
                    </div>
                </div>
                {/* end page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row mb-2">
                                    <div className="col-sm-5">
                                        <a href="/create-blog" className="btn btn-danger mb-2"><i className="mdi mdi-plus-circle me-2" /> Add Blog</a>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="text-sm-end">
                                            {/* <button type="button" className="btn btn-success mb-2 me-1"><i className="mdi mdi-cog-outline" /></button> */}
                                            {/* <button type="button" className="btn btn-light mb-2 me-1">Import</button> */}
                                            {/* <button type="button" className="btn btn-light mb-2">Export</button> */}
                                        </div>
                                    </div>{/* end col*/}
                                </div>
                                <div class="input-group">
                                    {/* <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                        aria-describedby="search-addon" value={keyword} onChange={handleSearch} /> */}
                                    {/* <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init>search</button> */}
                                </div>
                                <div className="table-responsive">

                                    <table className="table table-centered w-100 dt-responsive nowrap" id="products-datatable">
                                        <thead className="table-light">
                                            <tr>
                                                <th className="all" style={{ width: 20 }}>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                        <label className="form-check-label" htmlFor="customCheck1">&nbsp;</label>
                                                    </div>
                                                </th>
                                                <th className="all">Blog ID</th>
                                                <th>Title</th>
                                                <th>Tags</th>
                                                <th>Categories</th>
                                                <th>Author</th>
                                                <th>Date</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            {blogs.map(blog => (
                                                <tr key={blog.id} >

                                                    <td>
                                                        {blog.id}
                                                    </td>
                                                    <td>
                                                        <Link to={`http://localhost:3000/blog-detail/${blog.id}`} className="aspect aspect--bg-grey aspect--1366-768 u-d-block" target="_blank">
                                                            <img src={blog.thumbnail} alt="contact-img" title="contact-img" className="rounded me-3" height={48} />
                                                        </Link>

                                                        <p className="m-0 d-inline-block align-middle font-16">
                                                            <a href="apps-ecommerce-products-details.html" className="text-body">

                                                            </a>
                                                            <br />
                                                            {/* <span className="text-warning mdi mdi-star" /> */}
                                                        </p>
                                                    </td>
                                                    <td>


                                                        <Link to={`http://localhost:3000/blog-detail/${blog.id}`} target="_blank" >
                                                            <p><strong>{blog.title}</strong></p>
                                                        </Link>

                                                    </td>

                                                    <td>
                                                        <div className="blog-t-w">
                                                            <div>
                                                                {blog.tagBlogIds.map(tagId => {
                                                                    const tag = tags[tagId];
                                                                    if (tag) {
                                                                        return (
                                                                            <React.Fragment key={tag.id}>
                                                                                <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">{tag.tagName}</a>
                                                                                {' '} {/* Khoảng trống */}
                                                                            </React.Fragment>
                                                                        );
                                                                    } else {
                                                                        return null;
                                                                    }
                                                                })}
                                                            </div>
                                                        </div>
                                                    </td>


                                                    <td>

                                                        <span className="bp__stat-wrap">

                                                            <span className="bp__category">

                                                                {/* get-category */}

                                                                {blog.categoryBlogIds.map((categoryId, index) => {
                                                                    const categorie = categories[categoryId];
                                                                    if (categorie) {
                                                                        return (
                                                                            <React.Fragment key={categorie.id}>
                                                                                <a className="bp__category" href="blog-left-sidebar.html">{categorie.name}</a>
                                                                                {index < blog.categoryBlogIds.length - 1 && ' '}
                                                                            </React.Fragment>
                                                                        );
                                                                    } else {
                                                                        return null;
                                                                    }
                                                                })}



                                                            </span></span>

                                                    </td>
                                                    <td>

                                                        <span className="badge bg-success">{blog.userFullName}</span>



                                                    </td>
                                                    <td className="table-action">
                                                        <Link to={`http://localhost:3000/blog-detail/${blog.id}`} target="_blank" className="action-icon"> <i className="mdi mdi-eye" /></Link>
                                                        <Link to={`/update-blog/${blog.id}`} className="action-icon">
                                                            <i className="mdi mdi-square-edit-outline" />
                                                        </Link>
                                                        <a href="javascript:void(0);" className="action-icon" onClick={() => handleDeleteBlog(blog.id)}> <i className="mdi mdi-delete" /></a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                </div>

                                <nav className="post-center-wrap u-s-p-y-60">
                                    {/*====== Pagination ======*/}
                                    <ul className="blog-pg" style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', alignItems: 'center' }}>
                                        {currentPage > 0 && (
                                            <li style={{ margin: '0 5px' }}>
                                                <button onClick={handlePrevButtonClick} className="page-link">Previous</button>
                                            </li>
                                        )}
                                        {renderPaginationButtons()}
                                        {currentPage < totalPages - 1 && (
                                            <li style={{ margin: '0 5px' }}>
                                                <button onClick={handleNextButtonClick} className="page-link">Next</button>
                                            </li>
                                        )}
                                    </ul>
                                    {/*====== End - Pagination ======*/}
                                </nav>



                            </div> {/* end card-body*/}
                        </div> {/* end card*/}
                    </div> {/* end col */}
                </div>
                {/* end row */}
            </div> {/* container */}
            {/* content */}

        </>
    )
}

export default ListBlog
