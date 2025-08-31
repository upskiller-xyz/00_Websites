import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { DataFetchService } from '../../services/DataFetchService';
import { DataFile } from '../../constants/data-files.enums';
import ContentTitle from './ContentTitle';
import ContactGrid from './ContactGrid';
const ContactUsContent = () => {
    const [contactMethods, setContactMethods] = useState([]);
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const data = await DataFetchService.fetchData(DataFile.CONTACTS);
                setContactMethods(data.contactMethods);
            }
            catch (error) {
                console.error('Error loading contacts:', error);
            }
        };
        fetchContacts();
    }, []);
    return (_jsxs("div", { className: "contact-us-content", children: [_jsx(ContentTitle, { title: "Contact Us", theme: "contact" }), _jsx(ContactGrid, { contactMethods: contactMethods })] }));
};
export default ContactUsContent;
