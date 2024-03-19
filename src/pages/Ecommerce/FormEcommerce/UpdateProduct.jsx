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
import ClockLoader from "react-spinners/ClockLoader";

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

    // const [name, setName] = useState('');
    // const [description, setDescription] = useState('');
    // const [price_sale, setPriceSale] = useState(null);
    // const [quantity, setQuantity] = useState(null);
    // const [size, setSize] = useState('');
    // const [color, setColor] = useState(null);
    // const [status, setStatus] = useState('1');
    // const [discount, setDiscount] = useState(null);
    // const [category_id, setCategoryId] = useState(null);
    // const [productImages, setProductImages] = useState([]);
    // const [category, setCategory] = useState([]);
    // const [brand, setBrand] = useState([]);
    // const [tagProduct, setTagProduct] = useState([]);
    // const [selectedCategoryId, setSelectedCategoryId] = useState('');
    // const [selectedBrandId, setSelectedBrandId] = useState('');
    // const [selectedTagProductId, setSelectedTagProducId] = useState('');

    const [priceSaleError, setPriceSaleError] = useState('');
    const [quantityError, setQuantityError] = useState('');
    const [discountError, setDiscountError] = useState('');
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [sizeError, setSizeError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [brandError, setBrandError] = useState('');
    const [tagError, setTagError] = useState('');

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
    const [loading, setLoading] = useState(false);

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "blue",
    };

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

    const validateInput = () => {
        let isValid = true;
        if (!values.name.trim()) {
            setNameError('Name is a required field');
            isValid = false;
        } else {
            setNameError('');
        }
        if (!values.description.trim()) {
            setDescriptionError('Description is a required field');
            isValid = false;
        } else {
            setDescriptionError('');
        }
        if (!values.price_sale || values.price_sale <= 0) {
            setPriceSaleError('Invalid selling price');
            isValid = false;
        } else {
            setPriceSaleError('');
        }
        if (!values.quantity || values.quantity <= 0) {
            setQuantityError('Invalid quantity');
            isValid = false;
        } else {
            setQuantityError('');
        }
        if (!values.discount || values.discount <= 0) {
            setDiscountError('Discount not valid');
            isValid = false;
        } else {
            setDiscountError('');
        }
        if (!values.size.trim()) {
            setSizeError('Size is a required field');
            isValid = false;
        } else {
            setSizeError('');
        }

        // Kiểm tra selectedCategory
        if (!selectedCategory.id) {
            setCategoryError('Category is a required field');
            isValid = false;
        } else {
            setCategoryError('');
        }
        // Kiểm tra selectedBrand
        if (!selectedBrand.id) {
            setBrandError('Brand is a required field');
            isValid = false;
        } else {
            setBrandError('');
        }
        // Kiểm tra selectedTagProduct
        if (!selectedTagProduct.id) {
            setTagError('Tag Product is a required field');
            isValid = false;
        } else {
            setTagError('');
        }
        return isValid;
    };


    const handleUpdateProduct = async () => {
        const isValid = validateInput();

        if (!isValid) {
            return;
        }

        try {
            setLoading(true);
            await axios.put('http://localhost:8080/api/v1/products/' + id, values);
            
            setTimeout(() => {
                setLoading(false);
                navigate('/product');
            }, 1000);
        } catch (error) {
            console.error('Error updating product:', error);
            setLoading(false);
        } 
        
    };



    // const handleUpdateProduct = async (event) => {
    //     //event.prevenDefault();
    //     axios.put('http://localhost:8080/api/v1/products/' + id, values)
    //         .then(res => {
    //             navigate('/product');
    //         })
    //         .catch(err => console.log(err));
    // }

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

    const validateCategory = () => {
        if (selectedCategoryId === 'Select') {
            setCategoryError('Please select a category');
            return false;
        } else {
            setCategoryError('');
            return true;
        }
    };

    const validateBrand = () => {
        if (selectedBrandId === 'Select') {
            setBrandError('Please select a Brand');
            return false;
        } else {
            setBrandError('');
            return true;
        }
    };

    const validateTagProduct = () => {
        if (selectedTagProductId === 'Select') {
            setTagError('Please select a Tag product');
            return false;
        } else {
            setTagError('');
            return true;
        }
    };


    return (
        <>
            {
                loading ? <ClockLoader
                    color={'#313A46'}
                    loading={loading}
                    cssOverride={override}
                    size={70}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> :
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
                                                        <input type="text" id="projectname" className={`form-control ${nameError ? 'is-invalid' : ''}`}
                                                            placeholder="Enter project name" value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} />
                                                        {nameError && <div className="invalid-feedback">{nameError}</div>}
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="project-overview" className="form-label">Description</label>
                                                        <textarea className={`form-control ${descriptionError ? 'is-invalid' : ''}`} id="project-overview" rows={5} placeholder="Enter some brief about project.."
                                                            defaultValue={""} value={values.description} onChange={(event) => setValues({ ...values, description: event.target.value })} />
                                                        {descriptionError && <div className="invalid-feedback">{descriptionError}</div>}
                                                    </div>
                                                    {/* Date View */}
                                                    {/* <div className="mb-3 position-relative" id="datepicker1">
                                    <label className="form-label">Start Date</label>
                                    <input type="text" className="form-control" data-provide="datepicker" data-date-container="#datepicker1" data-date-format="d-M-yyyy" data-date-autoclose="true" />
                                </div> */}
                                                    <div className="mb-3">
                                                        <label htmlFor="project-budget" className="form-label">price sale</label>
                                                        <input type="number" id="project-budget" className={`form-control ${priceSaleError ? 'is-invalid' : ''}`}
                                                            placeholder="Enter project budget" value={values.price_sale} onChange={(event) => setValues({ ...values, price_sale: event.target.value })} />
                                                        {priceSaleError && <div className="invalid-feedback">{priceSaleError}</div>}
                                                    </div>
                                                    {/* <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">thumbnail</label>
                                            <input type="text" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={values.thumbnail} onChange={(event) => setValues({ ...values, thumbnail: event.target.value })} />
                                        </div> */}
                                                    {/* <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Color</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={values.color} onChange={(event) => setValues({ ...values, color: event.target.value })} />
                                        </div> */}
                                                    {/* <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Quantity Sold</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={values.quantity_sold} onChange={(event) => setValues({ ...values, quantity_sold: event.target.value })} />
                                        </div> */}
                                                    {/* Status */}
                                                    {/* <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">status</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={values.status} onChange={(event) => setValues({ ...values, status: event.target.value })} />
                                        </div> */}
                                                    <select className="form-select" value={values.status} onChange={(event) => setValues({ ...values, status: event.target.value })}>
                                                        <option value="1" selected={values.status === "1"}>Active</option>
                                                        <option value="0" selected={values.status === "0"}>In-Active</option>
                                                    </select>
                                                    {/* Category */}
                                                    {/* <div className="mb-0">
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
                                        </div> */}
                                                    <div className="mb-0">
                                                        <label htmlFor="project-overview" className="form-label">Category</label>
                                                        <select value={selectedCategory.id} onChange={handleCategoryChange} className={`form-control select2 ${categoryError ? 'is-invalid' : ''}`} data-toggle="select2">
                                                            <option value="">Select</option>
                                                            {category && category.length > 0 &&
                                                                category.map((categoryItem, index) => {
                                                                    return (
                                                                        <option key={categoryItem.id} value={categoryItem.id}>{categoryItem.name}</option>
                                                                    )
                                                                })}
                                                        </select>
                                                        {categoryError && <div className="invalid-feedback">{categoryError}</div>}
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
                                                    {/* brand */}
                                                    {/* <div className="mb-0">
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
                                        </div> */}
                                                    <div className="mb-0">
                                                        <label htmlFor="project-overview" className="form-label">Brand</label>
                                                        <select value={selectedBrand.id} onChange={handlebrandChange} className={`form-control select2 ${brandError ? 'is-invalid' : ''}`} data-toggle="select2">
                                                            <option value="">Select</option>
                                                            {brand && brand.length > 0 &&
                                                                brand.map((brandItem, index) => {
                                                                    return (
                                                                        <option key={brandItem.id} value={brandItem.id}>{brandItem.name}</option>
                                                                    )
                                                                })}
                                                        </select>
                                                        {brandError && <div className="invalid-feedback">{brandError}</div>}
                                                    </div>
                                                    {/* TagProduct */}
                                                    {/* <div className="mb-0">
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
                                        </div> */}
                                                    <div className="mb-0">
                                                        <label htmlFor="project-overview" className="form-label">Tag product</label>
                                                        <select value={selectedTagProduct.id} onChange={handleTagProductChange} className={`form-control select2 ${tagError ? 'is-invalid' : ''}`} data-toggle="select2">
                                                            <option value="">Select</option>
                                                            {tagProduct && tagProduct.length > 0 &&
                                                                tagProduct.map((tagProductItem, index) => {
                                                                    return (
                                                                        <option key={tagProductItem.id} value={tagProductItem.id}>{tagProductItem.name}</option>
                                                                    )
                                                                })}
                                                        </select>
                                                        {tagError && <div className="invalid-feedback">{tagError}</div>}
                                                    </div>
                                                    {/* Size */}
                                                    {/* <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Size</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={values.size} onChange={(event) => setValues({ ...values, size: event.target.value })} />
                                        </div> */}
                                                    <div className="mb-3">
                                                        <label htmlFor="project-budget" className="form-label">Size</label>
                                                        <select
                                                            className={`form-select ${sizeError ? 'is-invalid' : ''}`}
                                                            value={values.size}
                                                            onChange={(event) => setValues({ ...values, size: event.target.value })}
                                                        >
                                                            <option value="">Select size</option>
                                                            <option value="750 – 850">750 – 850</option>
                                                            <option value="380 – 420">380 – 420</option>
                                                            <option value="850 – 1100">850 – 1100</option>
                                                            <option value="1000">1000</option>
                                                            <option value="800">800</option>
                                                            <option value="3000 – 2200 – 1700">3000 – 2200 – 1700</option>
                                                            <option value="850 – 900">850 – 900</option>
                                                            <option value="380 – 420">380 – 420</option>
                                                            <option value="2600 – 3200">2600 – 3200</option>
                                                            <option value="1600 – 1950">1600 – 1950</option>
                                                        </select>
                                                        {sizeError && <div className="invalid-feedback">{sizeError}</div>}

                                                    </div>
                                                    {/* Date View */}
                                                    <div className="mb-3">
                                                        <label htmlFor="project-budget" className="form-label">Quantity</label>
                                                        <input type="number" id="project-budget" className={`form-control ${quantityError ? 'is-invalid' : ''}`}
                                                            placeholder="Enter project budget" value={values.quantity} onChange={(event) => setValues({ ...values, quantity: event.target.value })} />
                                                        {quantityError && <div className="invalid-feedback">{quantityError}</div>}
                                                    </div>
                                                    {/* <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Material</label>
                                            <input type="number" id="project-budget" className="form-control"
                                                placeholder="Enter project budget" value={values.material} onChange={(event) => setValues({ ...values, material: event.target.value })} />
                                        </div> */}
                                                    <div className="mb-3">
                                                        <label htmlFor="project-budget" className="form-label">Discount</label>
                                                        <input type="number" id="project-budget" className={`form-control ${discountError ? 'is-invalid' : ''}`}
                                                            placeholder="Enter project budget" value={values.discount} onChange={(event) => setValues({ ...values, discount: event.target.value })} />
                                                        {discountError && <div className="invalid-feedback">{discountError}</div>}
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
                    </>}
        </>
    )
}

export default UpdateProduct
