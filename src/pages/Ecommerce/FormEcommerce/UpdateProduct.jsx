import React, { useState, useEffect } from 'react'
import TopNavbar from '../../../components/TopNavbar/TopNavbar'
import { createProduct } from '../../../services/ProductApi/ProductApi'
import { fetchallCategory } from '../../../services/CategoryApi/CategoryApi'
import { fetchallBrand } from '../../../services/BrandApi/BrandApi'
import { fetchallTagProduct } from '../../../services/TagProductApi/TagProductApi'
import { event } from 'jquery';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 as uuidv4 } from 'uuid'
import { imageDb } from '../../../Config/FireBaseConfig'

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState({
        id: '',
        name: ''
    });
    const [selectedBrand, setSelectedBrand] = useState({
        id: '',
        name: ''
    });
    const [selectedTagProduct, setSelectedTagProduct] = useState({
        id: '',
        name: ''
    });
    const [values, setValues] = useState({
        id: id,
        name: '',
        description: '',
        // thumbnail: '',
        price_sale: '',
        quantity: '',
        // material: '',
        size: '',
        color: '',
        // quantity_sold: '',
        status: '',
        discount: '',
        brand_id: '',
        tags_product_id: '',
        category_id: '',
        productImages: []
    });

    const [category, setCategory] = useState([]);
    const [brand, setBrand] = useState([]);
    const [tagProduct, setTagProduct] = useState([]);

    const [selectedCategoryId, setSelectedCategoryId] = useState('');
    const [selectedBrandId, setSelectedBrandId] = useState('');
    const [selectedTagProductId, setSelectedTagProducId] = useState('');

    useEffect(() => {
        getCategory();
        getBrand();
        getTagProduct();
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/products/' + id)
            .then(res => {
                setValues({
                    ...values,
                    name: res.data.name,
                    description: res.data.description,
                    // thumbnail: res.data.thumbnail,
                    price_sale: res.data.priceSale,
                    quantity: res.data.quantity,
                    // material: res.data.material,
                    size: res.data.size,
                    color: res.data.color,
                    // quantity_sold: res.data.quantitySold,
                    status: res.data.status,
                    discount: res.data.discount,
                    brand_id: res.data.brand.id,
                    tags_product_id: res.data.tagsProduct.id,
                    category_id: res.data.category.id,
                    productImages: res.data.productImages
                });
                setSelectedCategory({
                    id: res.data.category.id,
                    name: res.data.category.name
                });
                setSelectedBrand({
                    id: res.data.brand.id,
                    name: res.data.brand.name
                });
                setSelectedTagProduct({
                    id: res.data.tagsProduct.id,
                    name: res.data.tagsProduct.name
                });
            })
            .catch(err => console.log(err));
    }, [])



    const handleCategoryChange = (event) => {
        const categoryId = event.target.value;
        setSelectedCategory({
            id: categoryId,
            name: event.target.options[event.target.selectedIndex].text
        });
        setValues({ ...values, category_id: categoryId });
    };
    const handlebrandChange = (event) => {
        const brandId = event.target.value;
        setSelectedBrand({
            id: brandId,
            name: event.target.options[event.target.selectedIndex].text
        });
        setValues({ ...values, brand_id: brandId });
    };
    const handleTagProductChange = (event) => {
        const tagProductId = event.target.value;
        setSelectedTagProduct({
            id: tagProductId,
            name: event.target.options[event.target.selectedIndex].text
        });
        setValues({ ...values, tags_product_id: tagProductId });
    };


    const getCategory = async () => {
        try {
            let res = await fetchallCategory();
            setCategory(res.data);
            //console.log("Check top 5", res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const getBrand = async () => {
        try {
            let res = await fetchallBrand();
            setBrand(res.data);
            //console.log("Check top 5", res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const getTagProduct = async () => {
        try {
            let res = await fetchallTagProduct();
            setTagProduct(res.data);
            //console.log("Check top 5", res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleUpdateProduct = async (event) => {
        //event.prevenDefault();
        axios.put('http://localhost:8080/api/v1/products/' + id, values)
            .then(res => {
                navigate('/product');
            })
            .catch(err => console.log(err));
    }

    // const handleCategoryChange = (event) => {
    //     setSelectedCategoryId(event.target.value);
    // };

    const handleImageUpload = async (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const file = event.target.files[0];
            const imgRef = ref(imageDb, `images_eFurniture/${uuidv4()}`);
            await uploadBytes(imgRef, file);
            const downloadURL = await getDownloadURL(imgRef);

            // Cập nhật đường dẫn ảnh vào mảng productImages
            const updatedProductImages = [...values.productImages];
            updatedProductImages[index] = { id: updatedProductImages[index].id, image_url: downloadURL };

            // Cập nhật state
            setValues({ ...values, productImages: updatedProductImages });
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
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Projects</a></li>
                                    <li className="breadcrumb-item active">Update Product</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Update Product</h4>
                        </div>
                    </div>
                </div>
                {/* end page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="mb-3">
                                            <label htmlFor="projectname" className="form-label">Name</label>
                                            <input type="text" id="projectname" className="form-control"
                                                placeholder="Enter project name" value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="project-overview" className="form-label">Description</label>
                                            <textarea className="form-control" id="project-overview" rows={5} placeholder="Enter some brief about project.."
                                                defaultValue={""} value={values.description} onChange={(event) => setValues({ ...values, description: event.target.value })} />
                                        </div>
                                        {/* Date View */}
                                        {/* <div className="mb-3 position-relative" id="datepicker1">
                                    <label className="form-label">Start Date</label>
                                    <input type="text" className="form-control" data-provide="datepicker" data-date-container="#datepicker1" data-date-format="d-M-yyyy" data-date-autoclose="true" />
                                </div> */}
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">price sale</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={values.price_sale} onChange={(event) => setValues({ ...values, price_sale: event.target.value })} />
                                        </div>
                                        {/* <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">thumbnail</label>
                                            <input type="text" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={values.thumbnail} onChange={(event) => setValues({ ...values, thumbnail: event.target.value })} />
                                        </div> */}
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Color</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={values.color} onChange={(event) => setValues({ ...values, color: event.target.value })} />
                                        </div>
                                        {/* <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Quantity Sold</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={values.quantity_sold} onChange={(event) => setValues({ ...values, quantity_sold: event.target.value })} />
                                        </div> */}
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">status</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={values.status} onChange={(event) => setValues({ ...values, status: event.target.value })} />
                                        </div>
                                        <div className="mb-0">
                                            <label htmlFor="project-overview" className="form-label">Category</label>
                                            <select value={selectedCategory.id} onChange={handleCategoryChange} className="form-control select2" data-toggle="select2">
                                                <option readonly>Select</option>
                                                {category && category.length > 0 &&
                                                    category.map((categoryItem, index) => {
                                                        return (
                                                            <option key={categoryItem.id} value={categoryItem.id}>{categoryItem.name}</option>
                                                        )
                                                    })}
                                            </select>
                                        </div>
                                    </div> {/* end col*/}
                                    <div className="col-xl-6">
                                        <div className="mb-3 mt-3 mt-xl-0">
                                            <label htmlFor="projectname" className="mb-0">Avatar</label>
                                            <p className="text-muted font-14">Recommended thumbnail size 800x400 (px).</p>
                                            {/* <form action="https://coderthemes.com/" method="post" className="dropzone" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
                                                <div className="fallback">
                                                    <input name="file" type="file" />
                                                </div>
                                                <div className="dz-message needsclick">
                                                    <i className="h3 text-muted dripicons-cloud-upload" />
                                                    <h4>Drop files here or click to upload.</h4>
                                                </div>
                                            </form> */}
                                            <div className="product-images" style={{ width: "50%", display: "flex", justifyContent: "left" }}>
                                                {values.productImages.map((image, index) => (
                                                    <div key={index} style={{ marginRight: '10px' }}>
                                                        <img value={image.id} src={image.imageUrl} alt={`Image ${index}`} style={{ width: "100px", height: "auto", margin: "0 5px" }} />
                                                        <input type="file" onChange={(event) => handleImageUpload(event, index)} />
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Preview */}
                                            <div className="dropzone-previews mt-3" id="file-previews" />
                                            {/* file preview template */}
                                            <div className="d-none" id="uploadPreviewTemplate">
                                                <div className="card mt-1 mb-0 shadow-none border">
                                                    <div className="p-2">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <img data-dz-thumbnail src="#" className="avatar-sm rounded bg-light" alt />
                                                            </div>
                                                            <div className="col ps-0">
                                                                <a href="javascript:void(0);" className="text-muted fw-bold" data-dz-name />
                                                                <p className="mb-0" data-dz-size />
                                                            </div>
                                                            <div className="col-auto">
                                                                {/* Button */}
                                                                <a href="#" className="btn btn-link btn-lg text-muted" data-dz-remove>
                                                                    <i className="dripicons-cross" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end file preview template */}
                                        </div>
                                        <div className="mb-0">
                                            <label htmlFor="project-overview" className="form-label">Tags Product</label>
                                            <select value={selectedBrand.id} onChange={handlebrandChange} className="form-control select2" data-toggle="select2">
                                                <option >Select</option>
                                                {brand && brand.length > 0 &&
                                                    brand.map((brandItem, index) => {
                                                        return (
                                                            <option key={brandItem.id} value={brandItem.id}>{brandItem.name}</option>
                                                        )
                                                    })}
                                            </select>
                                        </div>
                                        <div className="mb-0">
                                            <label htmlFor="project-overview" className="form-label">Brand</label>
                                            <select value={selectedTagProduct.id} onChange={handleTagProductChange} className="form-control select2" data-toggle="select2">
                                                <option >Select</option>
                                                {tagProduct && tagProduct.length > 0 &&
                                                    tagProduct.map((tagProductItem, index) => {
                                                        return (
                                                            <option key={tagProductItem.id} value={tagProductItem.id}>{tagProductItem.name}</option>
                                                        )
                                                    })}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Size</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={values.size} onChange={(event) => setValues({ ...values, size: event.target.value })} />
                                        </div>
                                        {/* Date View */}
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Quantity</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={values.quantity} onChange={(event) => setValues({ ...values, quantity: event.target.value })} />
                                        </div>
                                        {/* <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Material</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={values.material} onChange={(event) => setValues({ ...values, material: event.target.value })} />
                                        </div> */}
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Discount</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={values.discount} onChange={(event) => setValues({ ...values, discount: event.target.value })} />
                                        </div>
                                    </div> {/* end col*/}

                                </div>

                                {/* end row */}
                            </div> {/* end card-body */}
                            <div class="justify-content-end row">
                                <div class="col-9">
                                    <button type="submit" onClick={() => handleUpdateProduct()} class="btn btn-info">Update</button>
                                </div>
                            </div>
                        </div> {/* end card*/}
                    </div> {/* end col*/}
                </div>
                {/* end row*/}
            </div> {/* container */}
        </>
    )
}

export default UpdateProduct
