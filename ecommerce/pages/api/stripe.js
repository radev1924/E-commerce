import Stripe from 'stripe';

const stripe = new stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY );

export default async function handler (req, res) {
    if (req.method === 'POST') {

    }
}