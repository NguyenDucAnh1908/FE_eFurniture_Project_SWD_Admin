import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Select, MenuItem } from '@material-ui/core';
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import { useParams } from 'react-router-dom';

const UpdateBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        categoryBlogIds: [], 
        tagBlogIds: [] ,
        userBlogId:''
    });

    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const categoryRef = useRef(null);
    const tagRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [blogResponse, categoriesResponse, tagsResponse] = await Promise.all([
                    axios.get(`http://localhost:8080/api/v1/blogs/get-blog-detail/${id}`),
                    axios.get('http://localhost:8080/api/v1/categories-blog/get-all-categoriesBlog'),
                    axios.get('http://localhost:8080/api/v1/tags-blog/get-all')
                ]);

                
                console.log('Blog response:', blogResponse.data);
                console.log('Categories response:', categoriesResponse.data);
                console.log('Tags response:', tagsResponse.data);

                setBlog(blogResponse.data);
                setFormData({
                    title: blogResponse.data.title,
                    content: blogResponse.data.content,
                    categoryBlogIds: blogResponse.data.categoryBlogIds, 
                    tagBlogIds: blogResponse.data.tagBlogIds,
                    userBlogId: blogResponse.data.userBlogId
                });
                setCategories(categoriesResponse.data);
                setTags(tagsResponse.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch blog detail');
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/api/v1/blogs/update_blog/${id}`, formData);
            console.log('Update successful:', response.data);
        } catch (error) {
            console.error('Error updating blog:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleContentChange = (content) => {
        setFormData(prevState => ({
            ...prevState,
            content: content
        }));
    };

    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <TopNavbar />
            <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                                    <li className="breadcrumb-item"><a href="/list-blog">Blogs</a></li>
                                    <li className="breadcrumb-item active">Update Blog</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Update Blog</h4>
                        </div>
                    </div>
                </div>
                {/* end page title */}
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={handleSubmit}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">


                                        <div className="mb-3">
                                            <label htmlFor="author" className="form-label">Title</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="title"
                                                value={formData.title}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3" hidden > 
                                                <label htmlFor="author" className="form-label">Author</label>

                                                <input className="form-control"
                                                    type="text" name="userBlogId"
                                                    value={formData.userBlogId} onChange={handleChange} required />

                                            </div>

                                        <div>
                                            <label>Category:</label>
                                            <Select
                                                value={formData.categoryBlogIds}
                                                onChange={handleChange}
                                                name="categoryBlogIds"
                                                multiple
                                                ref={categoryRef}
                                            >
                                                {categories.map(category => (
                                                    <MenuItem key={category.id} value={category.id}>
                                                        {category.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </div>
                                        <br />
                                        <div>
                                            <label>Tags:</label>
                                            <Select
                                                value={formData.tagBlogIds}
                                                onChange={handleChange}
                                                name="tagBlogIds"
                                                multiple
                                                ref={tagRef}
                                            >
                                                {tags.map(tag => (
                                                    <MenuItem key={tag.id} value={tag.id}>
                                                        {tag.tagName}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </div>

                                    <br/>
                                    <div className="mb-3">
                                        <label htmlFor="content" className="form-label">Content</label>
                                        <ReactQuill
                                            value={formData.content}
                                            onChange={handleContentChange}
                                            style={{ height: '30em', width: '100%' }}
                                        />
                                    </div>


                                </div> {/* end col*/}


                                <div className="col-xl-6">





                                </div>



                            </div>

                            {/* end row */}
                    </div> {/* end card-body */}
                    <div class="justify-content-end row">
                        <div class="col-9">
                            <button type="submit" class="btn btn-info">Save</button>
                        </div>

                    </div> {/* end card*/}
                </form>
            </div> {/* end col*/}
        </div >
            {/* end row*/ }
            </div > {/* container */ }


        </>
    )
}

export default UpdateBlog
