import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Features/cartSlice";

export function Confirmation() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [orderNumber, setOrderNumber] = useState(null);
    const [countdown, setCountdown] = useState(5); // Redirects after 5 seconds

    useEffect(() => {
        // Generate random order number
        const randomOrderNumber = Math.floor(100000 + Math.random() * 900000);
        setOrderNumber(randomOrderNumber);

        // Clear the cart when the user reaches this page
        dispatch(clearCart());

        // Countdown timer before redirecting
        const interval = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        // Redirect to homepage after countdown ends
        setTimeout(() => {
            navigate("/");
        }, 5000);

        return () => clearInterval(interval);
    }, [dispatch, navigate]);

    return (
        <>
            <div className="items-pizza-container">
                <h1 className="items-title">Order Confirmation</h1>
                <div className="items-grid" >
                    <div style={{
                        height: "600px",
                        borderRadius: "15px",
                        border: "1px solid #ddd",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "40px",
                        textAlign: "center",
                    }}>
                        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#333", marginBottom: "10px" }}>
                            🎉 Thank You for Your Order!
                        </h1>
                        <div style={{
                            width: "70%",
                            height: "300px",
                            padding: "20px 0",
                            backgroundColor: "#fff7f2",
                            borderRadius: "10px",
                            margin: "20px 0",

                            flexDirection: "column",
                            display: "flex",
                            justifyContent: "center",

                        }}>
                            <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#ff4500", marginBottom: "5px" }}>
                                ORDER NUMBER:
                            </h2>
                            <h2 style={{ fontSize: "3rem", fontWeight: "bold", color: "#ff4500" }}>
                                {orderNumber}
                            </h2>
                        </div>
                        <p style={{ fontSize: "1.1rem", color: "#555", maxWidth: "80%" }}>
                            Redirecting to the homepage in
                            <span style={{ fontWeight: "bold", color: "#ff4500" }}> {countdown} </span>
                            seconds...
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}
