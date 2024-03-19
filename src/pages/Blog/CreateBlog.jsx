import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Select, MenuItem } from '@material-ui/core';
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const CreateBlog = () => {
    const { user } = useContext(UserContext);
    const user_blog = user.account.user.id
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        categoryBlogIds: [],
        userBlogId: user_blog,
        tagBlogIds: []
    });

    const navigate = useNavigate()
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const categoryRef = useRef(null);
    const tagRef = useRef(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const categoriesResponse = await axios.get('http://localhost:8080/api/v1/categories-blog/get-all-categoriesBlog');
                const tagsResponse = await axios.get('http://localhost:8080/api/v1/tags-blog/get-all');

                setCategories(categoriesResponse.data);
                setTags(tagsResponse.data);
            } catch (error) {
                setError(error);
            }
        }

        fetchData();
    }, []);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const blogResponse = await axios.post('http://localhost:8080/api/v1/blogs/create_blog', formData);
            const blogId = blogResponse.data.id;
            navigate("/list-blog");
            toast.success("Create blog Success");
            // setSuccessMessage('Blog created successfully');
        } catch (error) {
            setError(error.response.data);
        }
    };




    return (
        <>
        <TopNavbar/>
            <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Projects</a></li>
                                    <li className="breadcrumb-item active">Create Blog</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Create Blog</h4>
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
                                        <div className="col-xl-6">

                                            <div className="mb-3">
                                                <label htmlFor="author" className="form-label">Title</label>


                                                <input className="form-control"
                                                    type="text" name="title"
                                                    value={formData.title} onChange={handleChange} required />

                                            </div>



                                            {/* <div className="mb-3">
                                                <label htmlFor="author" className="form-label">Author</label>

                                                <input className="form-control"
                                                    type="text" name="userBlogId"
                                                    value={formData.userBlogId} onChange={handleChange} required />

                                            </div> */}


                                          




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






                                            <div className="mb-3">
                                                <label htmlFor="project-overview" className="form-label">Content</label>
                                                <ReactQuill
                                                    value={formData.content}
                                                    onChange={handleContentChange}
                                                    style={{ height: '30em', width: '80em' }}
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
                                        <button type="submit" class="btn btn-info">Create</button>
                                    </div>
                                </div>
                            </div> {/* end card*/}
                        </form>
                    </div> {/* end col*/}
                </div>
                {/* end row*/}
            </div> {/* container */}


        </>
    )
}

export default CreateBlog
