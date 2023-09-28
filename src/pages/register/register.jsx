import "./register.scss";
import Navbar from "../../components/navbar/navbar";
export default function Register() {
    return (
        <div className="r-container">
            <Navbar />
            <main className="r">
                <div className="r-left">
                    <img src="../../../public/3d-graphic-designer-showing-thumbs-up-png 1.png" alt="" />
                </div>
                <div className="r-left-mobile">
                    <img src="../../../public/3d-graphic-designer-showing-thumbs-up-png-mobile.png" alt="" />
                </div>
                <form action="" className="register">
                    <h3 className="register__header"><span className="green">Register</span></h3>
                    <p className="paragraphs register__paragraph" >Be part of this movement!</p>
                    <h3 className="register__sub-header">CREATE YOUR ACCOUNT</h3>

                    <div className="register__inputs">
                        <div className="register__inputs__left">
                            <label htmlFor="Team’s Name">Team’s Name</label>
                            <input type="text" placeholder="Enter the name of your group" className="input" />
                        </div>
                        <div className="register__inputs__right">
                            <label htmlFor="Phone">Phone</label>
                            <input type="text" placeholder="Enter your phone number" className="input" />
                        </div>
                    </div>

                    <div className="register__inputs">
                        <div className="register__inputs__left">
                            <label htmlFor="Email">Email</label>
                            <input type="Email" placeholder="Enter your email address" className="input" />
                        </div>
                        <div className="register__inputs__right">
                            <label htmlFor="Project Topic">Project Topic</label>
                            <input type="text" placeholder="What is your group project topic" className="input" />
                        </div>
                    </div>

                    <div className="register__inputs">
                        <div className="register__inputs__left">
                            <label for="Category">Category:</label>
                            <select id="myDropdown" name="Select your category">
                                <option value="Select your category">Select your category</option>
                            </select>

                        </div>
                        <div className="register__inputs__right">
                            <label for="Category">Group Size:</label>
                            <select id="myDropdown" name="Select">
                                <option value="apple">Select</option>
                            </select>

                        </div>
                    </div>
                    <p className="war">Please review your registration details before submitting</p>
                    <div className="form-last">
                        <input type="checkbox" className="input"/>
                        <p className="paragraphs check-p">I agreed with the event terms and conditions  and privacy policy</p>
                    </div>
                    <button className="btn">Register Now</button>
                </form>
            </main>
        </div>
    )
}