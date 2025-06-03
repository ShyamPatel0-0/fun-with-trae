const supabase = require('../supabase');

async function createUser(email, password_hash) {
    const { data, error } = await supabase
        .from('users')
        .insert([{ email, password_hash }])
        .select()
        .single();

    if (error) throw error;
    return data;
}

async function getUserByEmail(email) {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();

    if (error) throw error;
    return data;
}

module.exports = { createUser, getUserByEmail };
