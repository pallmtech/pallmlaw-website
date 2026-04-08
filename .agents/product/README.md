# Product Exchange

Purpose:

- hold structured marketing-to-product communication without letting product alter website agent memory

Structure:

- `handoffs/` -> marketing-originated handoffs for product
- `inbox/` -> product-originated items copied into the website repo for marketing review

Rules:

- the website repo owns everything under `.agents/product/`
- product does not edit website repo agent memory directly
- inbox items from product are the working source for capability claims
- marketing must not publish claims beyond what product truth supports
