import React, { useState } from 'react';
import { fakeData } from '../data/data';

const Problem1 = () => {

    // changing filter-status
    const [show, setShow] = useState('all');

    // load placeholder data
    const [currentData, setCurrentData] = useState(fakeData)

    // Set status
    const handleClick = (val) => {
        setShow(val);
    }

    // Order with status of item
    const status = {
        'active': 1,
        'completed': 2,
        'pending': 3,
        'archive': 4,

    };

    //Set data from user input
    const [inputData, setInputData] = useState({name: '', status: '' })

    // Change form data of item & status
    const handleChange = (e) => {
        const { name } = e.target;
        if (name === 'name') {
            setInputData({ ...inputData, name: e.target.value })
        } else {
            setInputData({ ...inputData, status: e.target.value })
        }
    }

    // Add input data to the current dataset/fakedata
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = [...currentData, inputData];
        setCurrentData(updatedData);
        // setInputData({ id: "", name: "", status: "" });
    }


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input type="text" name='name' className="form-control" placeholder="Name" value={inputData.name}
                                onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name='status' value={inputData.status}
                                onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary"

                            >Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentData.filter(item => show === 'all' ? item : item.status === show).sort((a, b) => status[a.status] - status[b.status]).map(item => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;