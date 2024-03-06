import React, { useState, useEffect } from 'react'
import TopNavbar from '../../../components/TopNavbar/TopNavbar'
import { createProduct } from '../../../services/ProductApi/ProductApi'
import { fetchallCategory } from '../../../services/CategoryApi/CategoryApi'
import { fetchallBrand } from '../../../services/BrandApi/BrandApi'
import { fetchallTagProduct } from '../../../services/TagProductApi/TagProductApi'
import { event } from 'jquery';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CreateProduct = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [price_sale, setPriceSale] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [material, setMaterial] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState(null);
    const [quantity_sold, setQuantitySold] = useState(null);
    const [status, setStatus] = useState(null);
    const [discount, setDiscount] = useState(null);
    const [category_id, setCategoryId] = useState(null);
    const [brand_id, setBrandId] = useState(null);
    const [tags_product_id, setTagsProductId] = useState(null);

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

    const handleCreateProduct = async () => {
        try {
            let res = await createProduct(name, description, thumbnail, price_sale, quantity, material, size,
                color, quantity_sold, status, discount, selectedCategoryId, selectedBrandId, selectedTagProductId);
            console.log("Create productL ", res)
            if (res) {
                // Chuyển hướng sang trang /product
                navigate('/product');
                // toast.success("Create product successfully")
            } else {
                // toast.error("Create product fail")
            }
        } catch (error) {
            console.error('Error calculating total:', error);
        }
    }

    const handleCategoryChange = (event) => {
        setSelectedCategoryId(event.target.value);
    };
    const handlebrandChange = (event) => {
        setSelectedBrandId(event.target.value);
    };
    const handleTagProductChange = (event) => {
        setSelectedTagProducId(event.target.value);
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
                                    <li className="breadcrumb-item active">Create Project</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Create Project</h4>
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
                                                placeholder="Enter project name" value={name} onChange={(event) => setName(event.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="project-overview" className="form-label">Description</label>
                                            <textarea className="form-control" id="project-overview" rows={5} placeholder="Enter some brief about project.."
                                                defaultValue={""} value={description} onChange={(event) => setDescription(event.target.value)} />
                                        </div>
                                        {/* Date View */}
                                        {/* <div className="mb-3 position-relative" id="datepicker1">
                                            <label className="form-label">Start Date</label>
                                            <input type="text" className="form-control" data-provide="datepicker" data-date-container="#datepicker1" data-date-format="d-M-yyyy" data-date-autoclose="true" />
                                        </div> */}
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">price sale</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={price_sale} onChange={(event) => setPriceSale(event.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">thumbnail</label>
                                            <input type="text" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={thumbnail} onChange={(event) => setThumbnail(event.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Color</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={color} onChange={(event) => setColor(event.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Quantity Sold</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={quantity_sold} onChange={(event) => setQuantitySold(event.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">status</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={status} onChange={(event) => setStatus(event.target.value)} />
                                        </div>
                                        <div className="mb-0">
                                            <label htmlFor="project-overview" className="form-label">Category</label>
                                            <select onChange={handleCategoryChange} className="form-control select2" data-toggle="select2">
                                                <option>Select</option>
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
                                            <form action="https://coderthemes.com/" method="post" className="dropzone" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
                                                <div className="fallback">
                                                    <input name="file" type="file" />
                                                </div>
                                                <div className="dz-message needsclick">
                                                    <i className="h3 text-muted dripicons-cloud-upload" />
                                                    <h4>Drop files here or click to upload.</h4>
                                                </div>
                                            </form>
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
                                            <select onChange={handlebrandChange} className="form-control select2" data-toggle="select2">
                                                <option>Select</option>
                                                {brand && brand.length > 0 &&
                                                    brand.map((branditem, index) => {
                                                        return (
                                                            <option key={index} value={branditem.id}>{branditem.name}</option>
                                                        )
                                                    })}
                                            </select>
                                        </div>
                                        <div className="mb-0">
                                            <label htmlFor="project-overview" className="form-label">Brand</label>
                                            <select onChange={handleTagProductChange} className="form-control select2" data-toggle="select2">
                                                <option>Select</option>
                                                {tagProduct && tagProduct.length > 0 &&
                                                    tagProduct.map((tagProductitem, index) => {
                                                        return (
                                                            <option key={index} value={tagProductitem.id}>{tagProductitem.name}</option>
                                                        )
                                                    })}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Size</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={size} onChange={(event) => setSize(event.target.value)} />
                                        </div>
                                        {/* Date View */}
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Quantity</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Material</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={material} onChange={(event) => setMaterial(event.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Discount</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={discount} onChange={(event) => setDiscount(event.target.value)} />
                                        </div>
                                    </div> {/* end col*/}

                                </div>

                                {/* end row */}
                            </div> {/* end card-body */}
                            <div class="justify-content-end row">
                                <div class="col-9">
                                    <button type="submit" onClick={() => handleCreateProduct()} class="btn btn-info">Create</button>
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

export default CreateProduct
