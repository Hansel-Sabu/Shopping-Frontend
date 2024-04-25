import React from 'react'
import Navbar from './Navbar'

const AddP = () => {
    return (
        <div>
            <Navbar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-6 col-xl-66 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Product Title</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-xl-6 col-xl-6 col-xxl-6">
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Product Image</label>
                                    <input class="form-control" type="file" id="formFile" />
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Description</label>
                                <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-xl-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Category</label>
                                <select name="" id="" className="form-control">
                                    <option value="Veg">Home appliances</option>
                                    <option value="Non-Veg">Electronics</option>
                                    <option value="Non-Veg">Fashion</option>
                                    <option value="Non-Veg">Travel</option>
                                    <option value="Non-Veg">Toys</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddP