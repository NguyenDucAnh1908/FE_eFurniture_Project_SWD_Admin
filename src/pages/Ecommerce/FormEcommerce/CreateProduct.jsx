import React, { useState, useEffect } from 'react'
import TopNavbar from '../../../components/TopNavbar/TopNavbar'
import { createProduct } from '../../../services/ProductApi/ProductApi'
import { fetchallCategory } from '../../../services/CategoryApi/CategoryApi'
import { fetchallBrand } from '../../../services/BrandApi/BrandApi'
import { fetchallTagProduct } from '../../../services/TagProductApi/TagProductApi'
import { event } from 'jquery';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { imageDb } from '../../../Config/FireBaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 as uuidv4 } from 'uuid'

const CreateProduct = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price_sale, setPriceSale] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [size, setSize] = useState('');
    const [color, setColor] = useState(null);
    const [status, setStatus] = useState('1');
    const [discount, setDiscount] = useState(null);
    const [category_id, setCategoryId] = useState(null);
    const [productImages, setProductImages] = useState([]);
    const [category, setCategory] = useState([]);
    const [brand, setBrand] = useState([]);
    const [tagProduct, setTagProduct] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState('');
    const [selectedBrandId, setSelectedBrandId] = useState('');
    const [selectedTagProductId, setSelectedTagProducId] = useState('');

    const [priceSaleError, setPriceSaleError] = useState('');
    const [quantityError, setQuantityError] = useState('');
    const [discountError, setDiscountError] = useState('');
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [sizeError, setSizeError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [brandError, setBrandError] = useState('');
    const [tagError, setTagError] = useState('');
    const [imageError, setImageError] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);


    const validateInput = () => {
        let isValid = true;
        if (!name.trim()) {
            setNameError('Name is a required field');
            isValid = false;
        } else {
            setNameError('');
        }
        if (!description.trim()) {
            setDescriptionError('Description is a required field');
            isValid = false;
        } else {
            setDescriptionError('');
        }
        if (!price_sale || price_sale <= 0) {
            setPriceSaleError('Invalid selling price');
            isValid = false;
        } else {
            setPriceSaleError('');
        }
        if (!quantity || quantity <= 0) {
            setQuantityError('Invalid quantity');
            isValid = false;
        } else {
            setQuantityError('');
        }
        if (!discount || discount <= 0) {
            setDiscountError('Discount not valid');
            isValid = false;
        } else {
            setDiscountError('');
        }
        if (!size.trim()) {
            setSizeError('Size is a required field');
            isValid = false;
        } else {
            setSizeError('');
        }
        if (selectedCategoryId === 'Select') {
            setCategoryError('Category is a required field');
            isValid = false;
        } else {
            setCategoryError('');
        }
        if (selectedBrandId === 'Select') {
            setBrandError('Brand is a required field');
            isValid = false;
        } else {
            setBrandError('');
        }
        if (selectedTagProductId === 'Select') {
            setTagError('Tag product is a required field');
            isValid = false;
        } else {
            setTagError('');
        }

        return isValid;
    };



    const [img, setImg] = useState('');
    // const [brand_id, setBrandId] = useState(null);
    // const [tags_product_id, setTagsProductId] = useState(null);
    // const [quantity_sold, setQuantitySold] = useState(null);
    // const [material, setMaterial] = useState('');
    // const [thumbnail, setThumbnail] = useState('');

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
            const imageUrls = await Promise.all(productImages.map(async (image) => {
                const imgRef = ref(imageDb, `images_eFurniture/${uuidv4()}`);
                await uploadBytes(imgRef, image);
                return getDownloadURL(imgRef);
            }));
            const formattedImages = imageUrls.map(imageUrl => ({ image_url: imageUrl }));
            let res = await createProduct(name, description, price_sale, quantity, size,
                color, status, discount, selectedCategoryId, selectedBrandId, selectedTagProductId, formattedImages);
            console.log("Create productL ", res)
            if (!validateInput()) {
                // Nếu thông tin không hợp lệ, không thực hiện tạo sản phẩm
                return;
            }
            if (res) {
                // Chuyển hướng sang trang /product
                navigate('/product');
                toast.success("Create Product Success");
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
        validateCategory();
    };
    const handlebrandChange = (event) => {
        setSelectedBrandId(event.target.value);
        validateBrand();
    };
    const handleTagProductChange = (event) => {
        setSelectedTagProducId(event.target.value);
        validateTagProduct();
    };

    const handleImageChange = (event) => {
        const files = event.target.files;
        if (files.length === 0) {
            toast.error('Please select at least one image.');
            return;
        }
        const newImages = [];

        for (let i = 0; i < files.length; i++) {
            newImages.push(files[i]);
        }

        setProductImages(newImages);
    };

    const validatePriceSale = (value) => {
        if (value <= 0) {
            setPriceSaleError('Price sale must be greater than 0');
            return false;
        } else {
            setPriceSaleError('');
            return true;
        }
    }

    const handlePriceSaleChange = (event) => {
        const value = event.target.value;
        setPriceSale(value);
        validatePriceSale(value);
    }

    const validateQuantity = (value) => {
        if (value <= 0) {
            setQuantityError('Quantity must be greater than 0');
            return false;
        } else {
            setQuantityError('');
            return true;
        }
    }

    const handleQuantityChange = (event) => {
        const value = event.target.value;
        setQuantity(value);
        validateQuantity(value);
    }

    const validateDiscount = (value) => {
        if (value <= 0) {
            setDiscountError('Discount must be greater than 0');
            return false;
        } else {
            setDiscountError('');
            return true;
        }
    }

    const handleDiscountChange = (event) => {
        const value = event.target.value;
        setDiscount(value);
        validateDiscount(value);
    }

    const validateCategory = () => {
        if (selectedCategoryId === 'Select') {
            setCategoryError('Vui lòng chọn một danh mục');
            return false;
        } else {
            setCategoryError('');
            return true;
        }
    };

    const validateBrand = () => {
        if (selectedBrandId === 'Select') {
            setBrandError('Vui lòng chọn một danh mục');
            return false;
        } else {
            setBrandError('');
            return true;
        }
    };

    const validateTagProduct = () => {
        if (selectedTagProductId === 'Select') {
            setTagError('Vui lòng chọn một danh mục');
            return false;
        } else {
            setTagError('');
            return true;
        }
    };


    // useEffect(() => {
    //     validateForm();
    // }, [name, description, price_sale, quantity, size, color, status, discount, selectedCategoryId, selectedBrandId, selectedTagProductId, productImages]);


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
                                            <input type="text" id="projectname"
                                                className={`form-control ${nameError ? 'is-invalid' : ''}`}
                                                placeholder="Enter project name"
                                                value={name}
                                                onChange={(event) => setName(event.target.value)} />
                                            {nameError && <div className="invalid-feedback">{nameError}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="project-overview"
                                                className="form-label">Description</label>
                                            <textarea className={`form-control ${descriptionError ? 'is-invalid' : ''}`}
                                                id="project-overview" rows={5}
                                                placeholder="Enter some brief about project.."
                                                defaultValue={""}
                                                value={description} onChange={(event) => setDescription(event.target.value)} />
                                            {descriptionError && <div className="invalid-feedback">{descriptionError}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Price sale</label>
                                            <input
                                                type="number"
                                                id="project-budget"
                                                className={`form-control ${priceSaleError ? 'is-invalid' : ''}`}
                                                placeholder="Enter project budget"
                                                value={price_sale}
                                                onChange={handlePriceSaleChange} />
                                            {priceSaleError && <div className="invalid-feedback">{priceSaleError}</div>}
                                        </div>
                                        <select className="form-select" value={status} onChange={(event) => setStatus(event.target.value)}>
                                            <option value="1" selected={status === "1"}>Active</option>
                                            <option value="0" selected={status === "0"}>In-Active</option>
                                        </select>

                                        <div className="mb-0">
                                            <label htmlFor="project-overview" className="form-label">Category</label>
                                            <select onChange={handleCategoryChange} className={`form-control select2 ${categoryError ? 'is-invalid' : ''}`} data-toggle="select2">
                                                <option>Select</option>
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
                                            <input type="file" onChange={handleImageChange} multiple />
                                            <button onClick={handleCreateProduct}>Create Product</button>
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
                                            <label htmlFor="project-overview" className="form-label">Brand</label>
                                            <select onChange={handlebrandChange} className={`form-control select2 ${brandError ? 'is-invalid' : ''}`} data-toggle="select2">
                                                <option>Select</option>
                                                {brand && brand.length > 0 &&
                                                    brand.map((branditem, index) => {
                                                        return (
                                                            <option key={index} value={branditem.id}>{branditem.name}</option>
                                                        )
                                                    })}
                                            </select>
                                            {brandError && <div className="invalid-feedback">{brandError}</div>}

                                        </div>
                                        <div className="mb-0">
                                            <label htmlFor="project-overview" className="form-label">Tag product</label>
                                            <select onChange={handleTagProductChange} className={`form-control select2 ${tagError ? 'is-invalid' : ''}`} data-toggle="select2">
                                                <option>Select</option>
                                                {tagProduct && tagProduct.length > 0 &&
                                                    tagProduct.map((tagProductitem, index) => {
                                                        return (
                                                            <option key={index} value={tagProductitem.id}>{tagProductitem.name}</option>
                                                        )
                                                    })}
                                            </select>
                                            {tagError && <div className="invalid-feedback">{tagError}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Size</label>
                                            <select
                                                className={`form-select ${sizeError ? 'is-invalid' : ''}`}
                                                value={size}
                                                onChange={(event) => setSize(event.target.value)}
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
                                            <input
                                                type="number"
                                                id="project-budget"
                                                className={`form-control ${quantityError ? 'is-invalid' : ''}`}
                                                placeholder="Enter project budget"
                                                value={quantity}
                                                onChange={handleQuantityChange} />
                                            {quantityError && <div className="invalid-feedback">{quantityError}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="project-budget" className="form-label">Discount</label>
                                            <input type="number"
                                                id="project-budget"
                                                className={`form-control ${discountError ? 'is-invalid' : ''}`}
                                                placeholder="Enter project budget"
                                                value={discount}
                                                onChange={handleDiscountChange} />
                                            {discountError && <div className="invalid-feedback">{discountError}</div>}
                                        </div>
                                    </div> {/* end col*/}
                                </div>

                                {/* end row */}
                            </div> {/* end card-body */}
                            <div class="justify-content-end row">
                                <div class="col-9">
                                    <button type="submit" onClick={() => handleCreateProduct(validateInput())} class="btn btn-info">Create</button>
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
