const { createUser, getUserByEmail } = require('../service/user-service');
const { hashPassword, verifyPassword } = require('../utils/hash');

async function signup(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

        const password_hash = await hashPassword(password);
        const user = await createUser(email, password_hash);
        
        res.status(201).json({ message: 'User created', user: { id: user.id, email: user.email } });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

        const user = await getUserByEmail(email);
        if (!user) return res.status(401).json({ error: 'Invalid email or password' });

        const isValid = await verifyPassword(password, user.password_hash);
        if (!isValid) return res.status(401).json({ error: 'Invalid email or password' });

        // TODO: Add JWT or session here in future
        res.json({ message: 'Login successful', user: { id: user.id, email: user.email } });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

module.exports = { signup, login };
