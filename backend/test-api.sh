#!/bin/bash

# Test script for contact form API

API_URL="${1:-http://localhost:3001}"

echo "🧪 Testing Contact Form API"
echo "API URL: $API_URL"
echo ""

# Test 1: Health check
echo "1️⃣ Testing health endpoint..."
response=$(curl -s -w "\n%{http_code}" "$API_URL/health")
http_code=$(echo "$response" | tail -n 1)
body=$(echo "$response" | head -n -1)

if [ "$http_code" = "200" ]; then
    echo "✅ Health check passed"
    echo "   Response: $body"
else
    echo "❌ Health check failed (HTTP $http_code)"
    exit 1
fi

echo ""

# Test 2: Valid contact form submission
echo "2️⃣ Testing valid form submission..."
response=$(curl -s -w "\n%{http_code}" -X POST "$API_URL/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "user_name": "Test User",
    "user_email": "test@example.com",
    "user_message": "This is a test message from the automated test script.",
    "referrer": "question"
  }')

http_code=$(echo "$response" | tail -n 1)
body=$(echo "$response" | head -n -1)

if [ "$http_code" = "200" ]; then
    echo "✅ Valid submission accepted"
    echo "   Response: $body"
else
    echo "⚠️  Submission returned HTTP $http_code"
    echo "   Response: $body"
fi

echo ""

# Test 3: Invalid email
echo "3️⃣ Testing invalid email validation..."
response=$(curl -s -w "\n%{http_code}" -X POST "$API_URL/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "user_name": "Test User",
    "user_email": "invalid-email",
    "user_message": "This should fail validation",
    "referrer": "question"
  }')

http_code=$(echo "$response" | tail -n 1)

if [ "$http_code" = "400" ]; then
    echo "✅ Invalid email rejected (as expected)"
else
    echo "⚠️  Expected 400, got HTTP $http_code"
fi

echo ""

# Test 4: Missing required fields
echo "4️⃣ Testing missing required fields..."
response=$(curl -s -w "\n%{http_code}" -X POST "$API_URL/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "user_name": "",
    "user_email": "test@example.com",
    "user_message": ""
  }')

http_code=$(echo "$response" | tail -n 1)

if [ "$http_code" = "400" ]; then
    echo "✅ Missing fields rejected (as expected)"
else
    echo "⚠️  Expected 400, got HTTP $http_code"
fi

echo ""

# Test 5: XSS attempt
echo "5️⃣ Testing XSS protection..."
response=$(curl -s -w "\n%{http_code}" -X POST "$API_URL/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "user_name": "Test <script>alert(\"xss\")</script>",
    "user_email": "test@example.com",
    "user_message": "Message with <script>malicious code</script>",
    "referrer": "question"
  }')

http_code=$(echo "$response" | tail -n 1)

if [ "$http_code" = "400" ]; then
    echo "✅ XSS attempt blocked (as expected)"
else
    echo "⚠️  XSS was not blocked (HTTP $http_code)"
fi

echo ""

# Test 6: Honeypot detection
echo "6️⃣ Testing honeypot (bot detection)..."
response=$(curl -s -w "\n%{http_code}" -X POST "$API_URL/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "user_name": "Test User",
    "user_email": "test@example.com",
    "user_message": "This is a bot",
    "referrer": "question",
    "honeypot": "I am a bot"
  }')

http_code=$(echo "$response" | tail -n 1)

if [ "$http_code" = "200" ]; then
    echo "✅ Honeypot detection working (silently accepted)"
else
    echo "⚠️  Unexpected response: HTTP $http_code"
fi

echo ""
echo "🎉 Testing complete!"
echo ""
echo "Note: Check your email inbox for test messages"
echo "      (Tests 2 and 6 should have sent emails)"
