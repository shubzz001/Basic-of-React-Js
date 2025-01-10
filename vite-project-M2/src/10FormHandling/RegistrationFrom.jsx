import React, { useState } from "react";
import "./registration.css";

const RegistrationForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [degree, setDegree] = useState("");
    const [formData, setFormData] = useState([]);
    const [skills, setSkills] = useState([]); // Updated to handle multiple skills
    const [selectedSkills, setSelectedSkills] = useState([]); // Updated to handle multiple skills

    function handleSubmit(e) {
        e.preventDefault();
        let data = { name, email, password, gender, degree, skills, };
        setName("");
        setEmail("");
        setPassword("");
        setGender("");
        setDegree("");
        setSkills([]); // Clear selected skills
        setFormData([...formData, data]);
        console.log(data);
    }

    function handleCheckboxChange(e) {
        // const value = e.target.value;
        // if (e.target.checked) {
        //     setSkills([...skills, value]); //! ... use this three dot for prev data store
        // } else {
        //     setSkills(skills.filter((skill) => skill !== value));
        // }

        const skills = e.target.value;
        const isChecked = e.target.checked;
        console.log(e.target.checked)
        setSelectedSkills((pre) => {
            if (isChecked) {
                return { ...pre, [skills]: isChecked };
            } else {
                const unCheckedSkills = { ...pre };
                delete unCheckedSkills[skills]
                return unCheckedSkills;
                // return { ...pre, [skills]: false };
            }
        })

    }

    return (
        <form className="container" onSubmit={handleSubmit}>
            <div>
                <div className="card">
                    <h1 className="heading">Registration Form</h1>
                    <label className="label">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input"
                    />

                    <label className="label">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="input"
                    />

                    <label htmlFor="password" className="label">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        aria-label="Password"
                    />

                    <div
                        className="checkbox-group"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <label>Skills:</label>
                        <label>
                            <input
                                type="checkbox"
                                name="skills"
                                value="HTML"
                                onChange={handleCheckboxChange}
                                // checked={skills.includes("HTML")}
                                checked={selectedSkills["HTML"]}

                            />{" "}
                            HTML
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="skills"
                                value="CSS"
                                onChange={handleCheckboxChange}
                                // checked={skills.includes("CSS")}
                                checked={selectedSkills["CSS"]}

                            />{" "}
                            CSS
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="skills"
                                value="JavaScript"
                                onChange={handleCheckboxChange}
                                // checked={skills.includes("JavaScript")}
                                checked={selectedSkills["JavaScript"]}
                            />{" "}
                            JavaScript
                        </label>
                    </div>

                    <label className="label">Gender</label>
                    <div
                        className="radio-group"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <label className="radio-label">
                            <input
                                type="radio"
                                value="Male"
                                checked={gender === "Male"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Male
                        </label>

                        <label className="radio-label">
                            <input
                                type="radio"
                                value="Female"
                                checked={gender === "Female"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Female
                        </label>

                        <label className="radio-label">
                            <input
                                type="radio"
                                value="Other"
                                checked={gender === "Other"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Other
                        </label>
                    </div>
                    <br />

                    <label className="label">Select Qualification</label>
                    <select
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                        className="input"
                    >
                        <option value="" disabled>
                            Select your degree
                        </option>
                        <option value="Bachelor's">Bachelor's</option>
                        <option value="Master's">Master's</option>
                        <option value="PhD">PhD</option>
                    </select>

                    <input type="submit" className="button" value="Submit" />
                </div>
            </div>
        </form>
    );
};

export default RegistrationForm;
