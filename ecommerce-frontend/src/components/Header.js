import React from 'react';

const Header = () => {
    return (
        <header>
            <meta charSet="utf-8" />
            <title>EShopper - Bootstrap Shop Template</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content="Free HTML Templates" />
            <meta name="description" content="Free HTML Templates" />

            {/* Favicon */}
            <link rel="icon" href="img/favicon.ico" />

            {/* Google Web Fonts */}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
                rel="stylesheet"
            />

            {/* Libraries Stylesheet */}
            <link href="assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

            {/* Customized Bootstrap Stylesheet */}
            <link href="assets/css/style.css" rel="stylesheet" />
        </header>
    );
}

export default Header;
