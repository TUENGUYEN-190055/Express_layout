exports.index = (req, res) => {
    let data = { title: 'Index Page' };
    res.render('home/index.ejs', data)
}

exports.about = (req, res) => {
    let data = { title: 'About Page' }
    res.render('home/about.ejs', data)
}

exports.list_items = (req, res) => {
    let items = [
        { name: 'Apple', price: 150 },
        { name: 'Orange', price: 200 },
        { name: 'Peach', price: 350 },
    ]
    //処理
    let data = { 
        items: items,
    }
    res.render('home/items.ejs', data)
}