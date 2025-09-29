import 'dotenv/config'
import nodemailer from 'nodemailer'

async function testEmail() {
  console.log('🧪 Testing email configuration...\n')
  
  // Show current configuration
  console.log('📋 Current SMTP Configuration:')
  console.log(`   Host: ${process.env.SMTP_HOST || 'NOT SET'}`)
  console.log(`   Port: ${process.env.SMTP_PORT || 'NOT SET'}`)
  console.log(`   User: ${process.env.SMTP_USER || 'NOT SET'}`)
  console.log(`   Pass: ${process.env.SMTP_PASS ? '***' + process.env.SMTP_PASS.slice(-4) : 'NOT SET'}`)
  console.log(`   To Email: ${process.env.TO_EMAIL || 'NOT SET'}\n`)
  
  // Check for missing configuration
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('❌ Missing SMTP configuration in .env file\n')
    
    if (process.env.SMTP_HOST === 'sandbox.smtp.mailtrap.io' && 
        (process.env.SMTP_USER?.includes('REPLACE') || process.env.SMTP_PASS?.includes('REPLACE'))) {
      console.log('🎯 MAILTRAP SETUP NEEDED:')
      console.log('1. Go to https://mailtrap.io and sign up')
      console.log('2. Create an inbox')
      console.log('3. Get your SMTP credentials')
      console.log('4. Update .env file with your actual credentials')
      console.log('5. See SETUP-EMAIL.md for detailed instructions\n')
    } else {
      console.log('💡 Please configure your .env file with SMTP settings.')
      console.log('📖 See SETUP-EMAIL.md for setup instructions\n')
    }
    
    process.exit(1)
  }

  try {
    console.log('🔌 Testing SMTP connection...')
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    // Verify connection
    await transporter.verify()
    console.log('✅ SMTP connection successful!')

    // Send test email
    console.log('📧 Sending test email...')
    
    const testMail = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: '✅ Test Email - Portfolio Contact Form Working!',
      text: `Great! Your portfolio contact form is now working correctly.

This test email confirms that:
✅ SMTP configuration is correct
✅ Email sending is functional
✅ Contact form will deliver messages

Configuration Details:
- SMTP Host: ${process.env.SMTP_HOST}
- From: ${process.env.FROM_NAME} <${process.env.FROM_EMAIL || process.env.SMTP_USER}>
- To: ${process.env.TO_EMAIL}
- Test Time: ${new Date().toISOString()}

Next Steps:
1. Visit your website: http://localhost:5173/contact
2. Fill out the contact form
3. Check your inbox for the message!

Your contact form is ready to use! 🎉`,

      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #059669;">✅ Portfolio Contact Form Test Successful!</h2>
  
  <p>Great! Your portfolio contact form is now working correctly.</p>
  
  <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
    <h3 style="margin-top: 0;">✅ Configuration Confirmed:</h3>
    <ul style="margin: 10px 0;">
      <li>SMTP configuration is correct</li>
      <li>Email sending is functional</li>
      <li>Contact form will deliver messages</li>
    </ul>
  </div>

  <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
    <h3 style="margin-top: 0;">📋 Configuration Details:</h3>
    <ul style="margin: 10px 0; color: #666;">
      <li><strong>SMTP Host:</strong> ${process.env.SMTP_HOST}</li>
      <li><strong>From:</strong> ${process.env.FROM_NAME} &lt;${process.env.FROM_EMAIL || process.env.SMTP_USER}&gt;</li>
      <li><strong>To:</strong> ${process.env.TO_EMAIL}</li>
      <li><strong>Test Time:</strong> ${new Date().toISOString()}</li>
    </ul>
  </div>

  <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 20px 0;">
    <h3 style="margin-top: 0;">🚀 Next Steps:</h3>
    <ol>
      <li>Visit your website: <a href="http://localhost:5173/contact">http://localhost:5173/contact</a></li>
      <li>Fill out the contact form</li>
      <li>Check your inbox for the message!</li>
    </ol>
  </div>

  <p style="text-align: center; margin: 30px 0;">
    <strong style="color: #059669;">Your contact form is ready to use! 🎉</strong>
  </p>
</div>`
    }

    const info = await transporter.sendMail(testMail)
    console.log('✅ Test email sent successfully!')
    console.log(`📬 Message ID: ${info.messageId}`)
    
    if (process.env.SMTP_HOST?.includes('mailtrap')) {
      console.log('\n📧 CHECK YOUR MAILTRAP INBOX:')
      console.log('   → https://mailtrap.io/inboxes')
      console.log('   → Look for the test email with the subject "Test Email - Portfolio Contact Form Working!"')
    } else {
      console.log(`\n📧 Check your inbox: ${process.env.TO_EMAIL}`)
    }

    console.log('\n🎉 SUCCESS! Your contact form email is now configured and working!')
    console.log('   → Test your contact form at: http://localhost:5173/contact')
    
  } catch (error) {
    console.error('\n❌ Email test failed:', error.message)
    
    if (error.code === 'EAUTH') {
      console.log('\n💡 Authentication failed. Common fixes:')
      console.log('   → Mailtrap: Double-check your username and password from the SMTP Settings tab')
      console.log('   → Gmail: Use App Password, not regular password')
      console.log('   → ProtonMail: Ensure Bridge is running and use Bridge app password')
    } else if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Connection refused. Check:')
      console.log('   → SMTP host and port are correct')
      console.log('   → For ProtonMail Bridge: Ensure the Bridge app is running')
      console.log('   → For Mailtrap: Use sandbox.smtp.mailtrap.io and port 2525')
    }
    
    console.log('\n📖 See SETUP-EMAIL.md for detailed setup instructions')
  }
}

testEmail()