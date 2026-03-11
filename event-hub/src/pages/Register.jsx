import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";
import Input from "../components/Input";
import supabase from "../utils/supabase";

const Register = () => {
    const [formData, setformData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setformData({ ...formData, [inputName]: inputValue });
    };

    const handleSubmit = async () => {
        // basic validation
        if (!formData.email || !formData.password) {
            alert("Email and password are required.");
            return;
        }

        if (formData.password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
            });

            if (error) {
                // handle rate limit error gracefully
                if (error.message.includes("rate limit")) {
                    alert(
                        "Too many signup attempts. Please wait a few minutes and try again."
                    );
                } else {
                    alert(error.message);
                }
                return;
            }

            if (data) {
                console.log("Signup successful:", data);
                alert("Signup successful! Check your email to confirm.");
            }
        } catch (err) {
            console.error(err);
            alert("Unexpected error occurred. Please try again later.");
        }
    };

    return (
        <PageWrapper>
            <Header />
            <Main className="flex justify-center">
                <div className="flex items-center">
                    <Card>
                        <h1 className="text-xl font-bold">Signup</h1>

                        <Input
                            label="Firstname"
                            name="firstname"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full"
                            onChange={handleInputChange}
                        />

                        <Input
                            label="Lastname"
                            name="lastname"
                            type="text"
                            placeholder="Enter your lastname"
                            className="w-full"
                            onChange={handleInputChange}
                        />

                        <Input
                            label="Email"
                            name="email"
                            type="text"
                            placeholder="Enter your Email"
                            className="w-full"
                            onChange={handleInputChange}
                        />

                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Enter your Password"
                            className="w-full mb-5"
                            onChange={handleInputChange}
                        />

                        <button
                            className="btn btn-primary rounded-full"
                            onClick={handleSubmit}
                        >
                            Signup
                        </button>
                    </Card>
                </div>
            </Main>
            <Footer />
        </PageWrapper>
    );
};

export default Register;