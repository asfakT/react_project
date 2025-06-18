import React from 'react';
import styles from './Contact.module.css';
import Button from '../Button/Button';
import { MdOutlineMessage } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {

    const [name, setName] = useState("asfak");
    const [email, setEmail] = useState("asfak@dosomecoding.com");
    const [text, setText] = useState("Good");

    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    };

    return (
        <>
            <section className={styles.container}>
                <div className={styles.contact_form}>
                    <div className={styles.top_btn}>
                        <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px" />} />
                        <Button text="VIA CALL" icon={<BiPhoneCall fontSize="24px" />} />
                    </div>
                    <Button
                        isOutline={true}
                        text="VIA EMAIL FORM"
                        icon={<MdOutlineEmail fontSize="24px" />}
                    />

                    <form onSubmit={onSubmit}>
                        <div className={styles.form_control}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" />
                        </div>
                        <div className={styles.form_control}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" />
                        </div>
                        <div className={styles.form_control}>
                            <label htmlFor="text">Text</label>
                            <textarea name="text" rows="8" />
                        </div>
                        <Button text="SUBMIT BUTTON" />
                    </form>
                </div>

                <div className={styles.contact_image}>
                    <img src="/images/contact.svg" alt="contact image" />
                </div>

            </section>

            <div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <div>Text: {text}</div>
            </div>

        </>

    );
};

export default ContactForm;