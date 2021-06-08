import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Subcribe our newsletter</h2>
          <form
            className="contact-form"
            name="testing-contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="testing-contract" />
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Your name"
            />
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Your email"
            />
            <button className="btn form-control" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
