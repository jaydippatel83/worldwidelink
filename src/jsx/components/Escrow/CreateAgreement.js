import React from 'react'

export default function CreateAgreement() {
    return (
        <>
            <div className='container'>
                <div className="col-xl-12 col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="basic-form">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group mb-3">
                                        <label>Agreement Title</label>

                                        <input
                                            type="text"
                                            className="form-control input-default form-control-lg "
                                            placeholder="Agreement Title"
                                        />
                                    </div>

                                    <div className="row">
                                        <div className="form-group mb-3 col-md-6">
                                            <label>Select Chain</label>
                                            <select
                                                defaultValue={"option"}
                                                className="form-control form-control-lg" aria-label="label for the select"
                                            >
                                                <option>Sepolia testnet</option>
                                                <option>Optimism Goerli testnet</option>
                                                <option>Mumbai testnet</option>
                                                <option>Fuji testnet</option>
                                                <option>BNB Chain testnet</option>
                                                <option> Base Goerli testnet</option>

                                            </select>
                                        </div>

                                        <div className="form-group mb-3 col-md-6">
                                            <label>Ammount</label>
                                            <input
                                                type="number"
                                                className="form-control form-control-lg"
                                                placeholder="0.1"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Service Provider</label>

                                        <input
                                            type="text"
                                            className="form-control input-default form-control-lg "
                                            placeholder="Address of service Provider"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Arbitrator</label>
                                        <input
                                            type="text"
                                            className="form-control input-default form-control-lg "
                                            placeholder="Address of Arbitrator"
                                        />
                                    </div>
                                    <div class="text-center mt-4">
                                        <button type="button" class="btn btn-primary">Create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}
