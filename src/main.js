import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { useStyles } from "./mainStyle";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import Button from '@mui/material/Button';

export default function Main() {
    const design = useStyles();
    return (
        <div className={design.mainDiv}>
            <div className={design.insidemainDiv}>
                <div className={design.margin}>
                    <div className={design.mainTop}>
                        <span className={design.spanA}>Patients Information</span>
                        <span className={design.spanB}>Last Updated: 10:25 AM</span>
                    </div>

                    <div className={design.belowPatientDiv}>
                        <div className={design.avat}>
                            <Avatar alt="Sara Sharp" src="/Images/sara.jpg"
                                sx={{ width: 70, height: 70 }}
                            />
                        </div>
                        <div>
                            <p className={design.sara}>Sara Smith</p>

                            <div className={design.Detail}>
                                <div className={design.insideDetail}>
                                    <div>
                                        <p className={design.detailofLeft}>Phone:</p>
                                        <p className={design.detailofLeft}>Email:</p>
                                        <p className={design.detailofLeft}>Gender:</p>
                                        <p className={design.detailofLeft}>Age:</p>
                                    </div>
                                    <div >
                                        <p className={design.detailofRight}>8607364473</p>
                                        <p className={design.detailofRight}>sarasmith@gmail.com</p>
                                        <p className={design.detailofRight}>Female</p>
                                        <p className={design.detailofRight}>25</p>
                                    </div>
                                </div>

                                <div className={design.insideDetail}>
                                    <div className={design.infodiv}>
                                        <p className={design.detailofLeft}>Surgery Type:</p>
                                        <p className={design.detailofLeft}>Surgery Date:</p>
                                        <p className={design.detailofLeft}>Height(cm):</p>
                                        <p className={design.detailofLeft}>Weight(lb):</p>
                                        <p className={design.detailofLeft}>BMI:</p>
                                    </div>
                                    <div>
                                        <p className={design.detailofRight}>Rotator Cuff Repair</p>
                                        <p className={design.detailofRight}>15 sep 1996</p>
                                        <p className={design.detailofRight}>163</p>
                                        <p className={design.detailofRight}>110</p>
                                        <p className={design.detailofRight}>18</p>
                                    </div>
                                </div>

                                <div className={design.insideDetail}>
                                    <div className={design.infodiv}>
                                        <p className={design.detailofLeft}>Anesthesiologist:</p>
                                        <p className={design.detailofLeft}>Anesthesiologist Phone:</p>
                                        <p className={design.detailofLeft}>anesthesiologist Email:</p>
                                    </div>
                                    <div>
                                        <p className={design.detailofRight}>Dr Christina Hardway</p>
                                        <p className={design.detailofRight}>8967129033</p>
                                        <p className={design.detailofRight}>christina@gmail.com</p>
                                    </div>
                                </div>

                                <div className={design.insideDetail1}>
                                    <p className={design.detailofLeft}>Surgury Clearance</p>
                                    <Avatar alt="Sara Sharp" src="/Images/yes4.jpg"
                                        sx={{ width: 70, height: 70 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className={design.list}>
                        <li className={design.lifirst}>List of Prior Surgeries</li>
                        <li className={design.li}>List of Medical Diagnosis</li>
                        <li className={design.li}>List of Medications</li>
                        <li className={design.li}>Airway Evaluation</li>
                        <li className={design.li}>
                            Anesthesia Clearance and Recommendation
                        </li>
                    </ul>
                </div>
            </div>
            <div className={design.margin}>
                <div className={design.aboveTable}>
                    <div>
                        <p className={design.upperRaw}>First Time Surgery</p>
                        <p className={design.lowerRaw}>No</p>
                    </div>

                    <div>
                        <p className={design.upperRaw}>
                            Family History of Surgical Complications ?
                        </p>
                        <p className={design.lowerRaw}>Yes</p>
                    </div>
                    <div>
                        <p className={design.upperRaw}>If Yes, please provide more details</p>
                        <p className={design.lowerRaw}>
                            In laboris reprehenderit excepteur enim mollit nulla anim dolore
                            qui ex ullamco. Eiusmod cillum elit sit aliqua commodo quis
                            exercitation reprehenderit nisi et deserunt eiusmod do.
                            
                        </p>
                    </div>
                </div>
                <span className={design.span}>Previous Surgeries</span>
                <table className={design.Table}>
                    <tr className={design.th}>
                        <td>Surgery Type</td>
                        <td>Date</td>
                        <td>Anesthesia Type</td>
                        <td>Surgical Complications</td>
                        <td>
                            Anesthetic Complications(nausea,vomiting,difficult intubation)
                        </td>
                    </tr>
                    <tr className={design.tr}>
                        <td>Shoulder reconstruction</td>
                        <td>January 2008</td>
                        <td>General "Breathing Tube"</td>
                        <td>No</td>
                        <td className={design.td}>
                            No
                            <td>
                                <DeleteIcon /> <CreateIcon />
                            </td>
                        </td>
                    </tr>
                </table>
                <div className={design.new}>
                <Button variant="contained" className={design.button}>
                + Add Surgery
                </Button>
                </div>
            </div>
        </div>
    );
}