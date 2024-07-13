# Nazaakat Store

Welcome to **Nazaakat Store**, a real-time e-commerce webstore built for business purposes, specifically for my close school friends to help and enhance their business engagement.

Live Store: [Nazaakat Store](https://nazaakat-store.vercel.app/)

Admin Page: [Nazaakat Admin](https://nazakaat-admin.vercel.app/)

## Tech Stack

- **Frontend**: Next.js, React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: React Redux
- **Authentication**: NextAuth.js
- **Payment Processing**: Stripe Payment Gateway
- **Image Storage**: Cloudinary

## Features

- **User Authentication**: Secure authentication implemented using NextAuth.js.
- **Product Management**: Admin page for managing products and categories. Admins can add, edit, or delete products and manage different categories.
- **Order Management**: Admin can view previous orders.
- **Image Storage**: Integrated with Cloudinary to store product images.
- **Secure Payments**: Integrated Stripe Payment Gateway for secure payment processing.

## Development

The entire design and development of Nazaakat Store were carried out by myself. This project was developed to help and enhance the business engagement of my school friends, demonstrating my ability to deliver a complete, production-ready web application from front-end to back-end.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SovanRoy10/Nazaakat-Frontend.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and add the following environment variables:
   ```env
   GOOGLE_ID = "**************************"
   GOOGLE_SECRET= "******************"
   MONGODB_URI = "**************************"
   NEXTAUTH_SECRET= enter any secret term
   PUBLIC_URL= "http://localhost:3000"
   STRIPE_WEBHOOK_SECRET = your stripe webhook secret
   STRIPE_SECRET = your stripe secrect
   PUBLISHABLE_KEY = stripe publishable key
   ```

4. **Run the application:**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Usage

- **User Authentication**: Sign up or log in to access the store.
- **Browse Products**: View the list of available products.
- **Admin Access**: Admins can manage products and categories through the admin page.
- **Secure Payments**: Use the integrated Stripe Payment Gateway for transactions.

## Contributing

If you want to contribute to this project, please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

---

Feel free to reach out if you have any questions or suggestions. Enjoy shopping at **Nazaakat Store**!