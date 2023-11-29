import React from 'react';
import Select from 'react-select';

const options = [
    { value: '1', label: 'Bitcoin (BTC)' },
    { value: '2', label: 'Ethereum (ETH)' },
    { value: '3', label: 'Chainlink (LINK)' },
    { value: '4', label: 'Polygon (MATIC)' },
]

const options2 = [
    { value: '1', label: 'USD' },
    { value: '2', label: 'INR' },
    { value: '3', label: 'GBP' },
    { value: '4', label: 'JPY' },
    { value: '5', label: 'HKD' },
    { value: '6', label: 'CNY' }
]

const Converter = () => {
    return (
        <div className="col-xxl-6 col-xl-6">
            <div className="card">
                <div className="card-header border-0">
                    <h4 className="heading mb-0">Currency Converter Calculator</h4>
                </div>
                <div className="card-body pt-0 custome-converter">
                    <div className="custome-converter-input">
                        <input type="text" className="form-control" placeholder="1" />
                    </div>
                    <div className="form-group custome-converter-select">
                        <Select
                            options={options}
                            defaultValue={options[0]}
                            className="custom-react-select"
                        />
                    </div>
                    <div className="custome-equal">
                        <span>=</span>
                    </div>
                    <div className="custome-converter-input style-1">
                        <input type="text" className="form-control" placeholder="$16,642.1500" />
                    </div>
                    <div className="form-group custome-converter-select">
                        <Select
                            options={options2}
                            className="custom-react-select"
                            defaultValue={options2[0]}
                            isSearchable={false}
                        />
                    </div>
                    <div className="d-flex justify-content-between align-items-center custome-refresh">
                        <span><svg data-v-e9805d6a="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path data-v-e9805d6a="" fill="#B8C2CC" d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path> <path data-v-e9805d6a="" d="M0 0h24v24H0z" fill="none"></path></svg></span>
                        <span className="text-black"><svg className="me-1" data-v-14e1c52e="" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.15 12.64"><g data-v-14e1c52e="" data-name="Layer 2"><g data-v-14e1c52e="" data-name="Layer 1"><path data-v-14e1c52e="" fill="#fcf4a0" d="M6.58.75L.75 7.06h3.54l-1.95 4.83L8.4 5.24H4.57L6.58.75z"></path> <path data-v-14e1c52e="" d="M6.58.75l-2 4.49H8.4l-6.06 6.65 2-4.83H.75L6.58.75m0-.75a.67.67 0 0 0-.37.11.65.65 0 0 0-.21.13L.2 6.55a.75.75 0 0 0 .55 1.26h2.43l-1.54 3.8a.76.76 0 0 0 .3.92.8.8 0 0 0 .4.11.74.74 0 0 0 .55-.24L9 5.75a.75.75 0 0 0-.6-1.26H5.73L7.24 1.1a.68.68 0 0 0 .09-.35.75.75 0 0 0-.74-.75zm0 1.5z" fill="#f4a51f"></path></g></g></svg>
                            CryptoCoin
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Converter;