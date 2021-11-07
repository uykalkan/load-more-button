# load-more-button
backend friendly and pure js load more button

## for demo
`npm install -g serve`

`serve .`

## how to use?

1) add `main.js` script to your project
2) add this code to your list page
```
    <div>
        <a class="text-primary" href="javascript:;"  id="more-button" data-url="/partial/1">
            Load More
            <i class="fas fa-spinner fa-spin ml-1 d-none"></i>
        </a>
    </div>
```
3) add this code to your partial view
```
<li style="border: 1px solid red; padding: 15px;">Data 1</li>
<li style="border: 1px solid red; padding: 15px;">Data 2</li>
<li style="border: 1px solid red; padding: 15px;">Data 3</li>

<div>
    <a class="text-primary" href="javascript:;"  id="more-button" data-url="/partial/2">
        Load More
        <i class="fas fa-spinner fa-spin ml-1 d-none"></i>
    </a>
</div>
```