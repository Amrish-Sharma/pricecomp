# **Price comparision Google Chrome extension**

## How it works
1. You install Chrome Extension
2. You follow ecommerce website (Amazon/Flipkart) and open products page
3. Open Chrome extension and click on "Find best price" button in popup page
4. If same product is listed on other Website(Amazon if current website is Flipkart or Flipkat, if current website is Amazon) and priced lower then price listed on current website
=> Display the product image and clickable link to other website
5. User clicks on clicable link and buys the product from other website


## How it works(behind the scenes)
1. When user clicks on "find best price", It fetches below detail from current website
    1. Product Title(exact keyword that we need to search on other website) i.e., current_prod_title
    2. Active price of product in current website(after discount) i.e., current_prod_price
    3. It searches for the current_prod_title in other website and fetches the active price on other website i.e., other_prod_price and link to buy the product(product page on other website) i.e., other_prod_buy_link
    4. If current_prod_price> other_prod_price then display the thumbnail image of current_prod and buy_link of product on other website
    Note: buy_link to be regenerated from other_prod_buy_link + affiliate_id preferably function to create affiliate links
        for example:
            if(other_website==Amazon); then affiliate of amazon+other_prod_buy_link
            if(other_website==Flipkart);then affiliate of flipkart+other_prod_buy_link
    5. If current_prod_price < other_prod_price then display a message, that you already have the best price available
    
