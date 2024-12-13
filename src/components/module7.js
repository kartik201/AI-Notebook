import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SocialMediaRevenue = () => {
    const data = [
        {
            company: 'Facebook (including WhatsApp and Instagram)',
            revenue: '$134.0 billion',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
        },
        {
            company: 'TikTok (and other apps)',
            revenue: '$110 billion',
            icon: 'https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-1024.png',
        },
        {
            company: 'YouTube',
            revenue: '$31.5 billion',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png',
        },
        {
            company: 'Twitter',
            revenue: '$2.5 billion',
            icon: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-1024.png',
        },
        {
            company: 'Snapchat',
            revenue: '$4.6 billion',
            icon: 'https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_7-snapchat-1024.png',
        },
    ];

    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const handleRowClick = (index) => {
        setSelected(selected === index ? null : index);
    };

    const handleNextPage = () => {
        navigate('/module8'); // Change this to the route of your next page
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Social Media <strong>Selling Your Attention</strong> </h1>
            <p style={styles.intro}>
                <b>Social media platforms have become massive revenue generators by monetizing our attention. Below is a breakdown of the top platforms and their 2020 revenues. Click "More" to learn about each platform!</b>
            </p>
            <div style={styles.tableContainer}>
                <div style={styles.tableHeader}>
                    <div style={styles.tableCell}>Company</div>
                    <div style={styles.tableCell}>2020 Revenue</div>
                    <div style={styles.tableCell}></div>
                </div>
                {data.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.tableRow,
                            backgroundColor: selected === index ? '#ffe0b2' : index % 2 === 0 ? '#f9f9f9' : '#fff',
                        }}
                    >
                        <div style={styles.tableCell}>
                            <img
                                src={item.icon}
                                alt={item.company}
                                style={styles.icon}
                            />
                            {item.company}
                        </div>
                        <div style={styles.tableCell}>{item.revenue}</div>
                        <div style={styles.tableCell}>
                            <button
                                style={styles.moreButton}
                                onClick={() => handleRowClick(index)}
                            >
                                {selected === index ? 'Hide' : 'More'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {selected !== null && (
                <div style={styles.detailBox}>
                    <h2>{data[selected].company}</h2>
                    <p>
                        <strong>Revenue:</strong> {data[selected].revenue}
                    </p>
                    <p>
                        {data[selected].company.includes('Facebook') && (
                            'Facebook generates revenue primarily through advertising, leveraging user data from its platforms like Instagram and WhatsApp to provide targeted marketing options.'
                        )}
                        {data[selected].company.includes('TikTok') && (
                            'TikTok capitalizes on short-form video content and leverages its algorithm to keep users engaged, generating revenue through ads and sponsorships.'
                        )}
                        {data[selected].company.includes('YouTube') && (
                            'YouTube earns revenue through ads displayed on videos, YouTube Premium subscriptions, and other monetization features for creators.'
                        )}
                        {data[selected].company.includes('Twitter') && (
                            'Twitter earns through promoted tweets, accounts, and trends, but its revenue is relatively smaller compared to other platforms.'
                        )}
                        {data[selected].company.includes('Snapchat') && (
                            'Snapchat focuses on ad-based revenue, particularly through its innovative AR filters and Discover content.'
                        )}
                    </p>
                </div>
            )}
            <button style={styles.nextButton} onClick={handleNextPage}>
                <b>➞</b>
            </button>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
    },
    header: {
        textAlign: 'center',
        color: 'black',
        marginBottom: '20px',
    },
    intro: {
        textAlign: 'center',
        color: '#555',
        marginBottom: '20px',
        fontSize: '16px',
    },
    tableContainer: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    tableHeader: {
        display: 'flex',
        backgroundColor: 'red',
        color: '#fff',
        fontWeight: 'bold',
    },
    tableRow: {
        display: 'flex',
        borderBottom: '1px solid #ddd',
        transition: 'background-color 0.3s',
    },
    tableCell: {
        flex: 1,
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        width: '24px',
        height: '24px',
        marginRight: '10px',
    },
    moreButton: {
        backgroundColor: '#f74239 ',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    detailBox: {
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#fff3e0',
        borderRadius: '8px',
        border: '1px solid #ffcc80',
    },
    nextButton: {
        marginTop: '20px',
        display: 'block',
        width: '10%',
        backgroundColor: '#f74239 ',
        color: '#fff',
        border: 'none',
        padding: '10px',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
        marginLeft: 'auto',
    },
};

export default SocialMediaRevenue;
