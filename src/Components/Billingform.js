import React, { useState, Fragment } from 'react';
 import { MdDelete} from "react-icons/md";
 import { AiFillPrinter } from "react-icons/ai";
 import'./Billing.css';


const Billingforms = () => {
  const [popupVisible, setPopupVisible] = useState(false);
 

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleSave = () => {
    handleClosePopup();
  };
  

  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={handleOpenPopup}>Open Popup</button>

      {popupVisible && (
        <div className="popup-overlay-a3">
          <div className="popup-a3">
            <div className="popup-a3">
              <h className="heading-a3">Total Due:89574</h>
                <table className="popup-table-3">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Bill</th>
                      <th>Department</th>
                      <th>Paid</th>
                      <th>Billed</th>
                      <th>Discount</th>
                      <th>Due</th>
                      <th>Refund</th>
                      <th>Service</th>
                      <th>Price</th>
                      <th>GST</th>
                      <th>Discount</th>
                      <th></th>
                      

                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr>
                      <td>09-aug-23</td>
                      <td>147</td>
                      <td>Consulting</td>
                      <td>200</td>
                      <td><AiFillPrinter/>60</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-11">Follow-Up consulting</td>
                      <td className="table-bck-11">710</td>
                      <td className="table-bck-11">515</td>
                      <td className="table-bck-11">810</td>
                      <td className="table-bck-11" style={{color:'red'}}><MdDelete /></td>
                   </tr>


                   <tr>
                      <td>25-Mar-24</td>
                      <td>173</td>
                      <td>Consulting</td>
                      <td>200</td>
                      <td><AiFillPrinter/>50</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-11">Follow-Up consulting</td>
                      <td className="table-bck-11">150</td>
                      <td className="table-bck-11">15</td>
                      <td className="table-bck-11">10</td>
                      <td className="table-bck-11" style={{color:'red'}}><MdDelete /></td>
                   </tr>


                   <tr>
                      <td>02-MAy-24</td>
                      <td>165</td>
                      <td>Consulting</td>
                      <td>200</td>
                      <td><AiFillPrinter/>270</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-11">Follow-Up consulting</td>
                      <td className="table-bck-11">6150</td>
                      <td className="table-bck-11">175</td>
                      <td className="table-bck-11">130</td>
                      <td className="table-bck-11" style={{color:'red'}}><MdDelete /></td>
                   </tr>


                   <tr>
                      <td>29-SEP-24</td>
                      <td>172</td>
                      <td>Consulting</td>
                      <td>200</td>
                      <td><AiFillPrinter/>10</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-11">Follow-Up consulting</td>
                      <td className="table-bck-11">150</td>
                      <td className="table-bck-11">15</td>
                      <td className="table-bck-11">10</td>
                      <td className="table-bck-11" style={{color:'red'}}><MdDelete /></td>
                   </tr>


                   <tr>
                      <td>25-AUG-23</td>
                      <td>173</td>
                      <td>Consulting</td>
                      <td>20</td>
                      <td><AiFillPrinter/>90</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-3">Follow-Up consulting</td>
                      <td className="table-bck-3">50</td>
                      <td className="table-bck-3">515</td>
                      <td className="table-bck-3">310</td>
                      <td className="table-bck-3" style={{color:'red'}}><MdDelete /></td>
                   </tr>


                   <tr>
                      <td>22-AUG-23</td>
                      <td>3570</td>
                      <td>Consulting</td>
                      <td>2860</td>
                      <td><AiFillPrinter/>730</td>
                      <td>30%</td>
                      <td>560</td>
                      <td>0</td>
                      <td className="table-bck-3">Follow-Up consulting</td>
                      <td className="table-bck-3">550</td>
                      <td className="table-bck-3">143</td>
                      <td className="table-bck-3">134</td>
                      <td className="table-bck-3" style={{color:'red'}}>< MdDelete /></td>
                   </tr>
                   <tr>
                      <td>5-AUG-23</td>
                      <td>173</td>
                      <td>Consulting</td>
                      <td>20</td>
                      <td><AiFillPrinter/>90</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-3">Follow-Up consulting</td>
                      <td className="table-bck-3">50</td>
                      <td className="table-bck-3">515</td>
                      <td className="table-bck-3">310</td>
                      <td className="table-bck-3" style={{color:'red'}}><MdDelete /></td>
                   </tr>

                   <tr>
                      <td>5-AUG-23</td>
                      <td>173</td>
                      <td>Consulting</td>
                      <td>20</td>
                      <td><AiFillPrinter/>90</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-3">Follow-Up consulting</td>
                      <td className="table-bck-3">50</td>
                      <td className="table-bck-3">515</td>
                      <td className="table-bck-3">310</td>
                      <td className="table-bck-3" style={{color:'red'}}><MdDelete /></td>
                   </tr>
                   <tr>
                      <td>5-AUG-23</td>
                      <td>173</td>
                      <td>Consulting</td>
                      <td>20</td>
                      <td><AiFillPrinter/>90</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-3">Follow-Up consulting</td>
                      <td className="table-bck-3">50</td>
                      <td className="table-bck-3">515</td>
                      <td className="table-bck-3">310</td>
                      <td className="table-bck-3" style={{color:'red'}}><MdDelete /></td>
                   </tr>
                   <tr>
                      <td>5-AUG-23</td>
                      <td>179</td>
                      <td>Consulting</td>
                      <td>20</td>
                      <td><AiFillPrinter/>90</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-3">Follow-Up consulting</td>
                      <td className="table-bck-3">50</td>
                      <td className="table-bck-3">515</td>
                      <td className="table-bck-3">310</td>
                      <td className="table-bck-3" style={{color:'red'}}><MdDelete /></td>
                   </tr>
                   <tr>
                      <td>5-AUG-23</td>
                      <td>163</td>
                      <td>Consulting</td>
                      <td>20</td>
                      <td><AiFillPrinter/>90</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-3">Follow-Up consulting</td>
                      <td className="table-bck-3">50</td>
                      <td className="table-bck-3">515</td>
                      <td className="table-bck-3">310</td>
                      <td className="table-bck-3" style={{color:'red'}}><MdDelete /></td>
                   </tr>
                   <tr>
                      <td>5-AUG-23</td>
                      <td>173</td>
                      <td>Consulting</td>
                      <td>20</td>
                      <td><AiFillPrinter/>90</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-3">Follow-Up consulting</td>
                      <td className="table-bck-3">50</td>
                      <td className="table-bck-3">515</td>
                      <td className="table-bck-3">310</td>
                      <td className="table-bck-3" style={{color:'red'}}><MdDelete /></td>
                   </tr>
                   <tr>
                      <td>5-AUG-23</td>
                      <td>173</td>
                      <td>Consulting</td>
                      <td>20</td>
                      <td><AiFillPrinter/>90</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-3">Follow-Up consulting</td>
                      <td className="table-bck-3">50</td>
                      <td className="table-bck-3">515</td>
                      <td className="table-bck-3">310</td>
                      <td className="table-bck-3" style={{color:'red'}}><MdDelete /></td>
                   </tr>
                   <tr>
                      <td>5-AUG-23</td>
                      <td>173</td>
                      <td>Consulting</td>
                      <td>20</td>
                      <td><AiFillPrinter/>90</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-3">Follow-Up consulting</td>
                      <td className="table-bck-3">50</td>
                      <td className="table-bck-3">515</td>
                      <td className="table-bck-3">310</td>
                      <td className="table-bck-3" style={{color:'red'}}><MdDelete /></td>
                   </tr>

                   <tr>
                      <td>5-AUG-23</td>
                      <td>253</td>
                      <td>Consulting</td>
                      <td>20</td>
                      <td><AiFillPrinter/>90</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-3">Follow-Up consulting</td>
                      <td className="table-bck-3">50</td>
                      <td className="table-bck-3">515</td>
                      <td className="table-bck-3">310</td>
                      <td className="table-bck-3" style={{color:'red'}}><MdDelete /></td>
                   </tr>

                   <tr>
                      <td>5-AUG-23</td>
                      <td>253</td>
                      <td>Consulting</td>
                      <td>20</td>
                      <td><AiFillPrinter/>90</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-3">Follow-Up consulting</td>
                      <td className="table-bck-3">50</td>
                      <td className="table-bck-3">515</td>
                      <td className="table-bck-3">310</td>
                      <td className="table-bck-3" style={{color:'red'}}><MdDelete /></td>
                   </tr>


                   <tr>
                      <td>5-AUG-23</td>
                      <td>163</td>
                      <td>Consulting</td>
                      <td>20</td>
                      <td><AiFillPrinter/>90</td>
                      <td>10%</td>
                      <td>50</td>
                      <td>0</td>
                      <td className="table-bck-3">Follow-Up consulting</td>
                      <td className="table-bck-3">50</td>
                      <td className="table-bck-3">515</td>
                      <td className="table-bck-3">310</td>
                      <td className="table-bck-3" style={{color:'red'}}><MdDelete /></td>
                   </tr>
                   



                  </tbody>
                </table>
                
                


                {/* <button onClick={handleSave}>Save</button> */}
            </div>
            {/* <div className='container'>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Billingforms;