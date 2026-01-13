
import jwt from 'jsonwebtoken';
import http from 'http';

const secret = "gs#secret"; // From .env
const fakeUserId = "65a123456789012345678901"; // Valid mongoID format but unlikely to exist

const token = jwt.sign({ userId: fakeUserId }, secret, { expiresIn: '1h' });

console.log("Generated Token:", token);

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/auth/check',
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.end();
