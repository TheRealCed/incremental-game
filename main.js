const count_html = document.getElementById("mainCount")
var count = new Decimal(0)
var clicks_per_second = 0
var clicks_bought = 1

function increment_count(quantity = 1) {
  count = count.plus(quantity)
  update_display()
}

function add_cps() {
  count = count.plus(clicks_per_second)
  update_display()
}

function increment_cps(amount = 1) {
  clicks_per_second += amount
}

function has_enough(amount) {
  return count.cmp(amount) == 1
}

function deduct(amount = 1) {
  count = count.sub(amount)
  update_display()
}

function buy_click(){
  base_price = 2
  // Scale the price exponentially
  let scaled_price = Math.pow(base_price, clicks_bought)
  if (has_enough(scaled_price)) {
    deduct(scaled_price)
    increment_cps()
    clicks_bought++
    document.getElementById("bitch").innerHTML = Math.pow(base_price, clicks_bought)
  }
}

function update_display() {
  if (count.cmp(1000) == -1)
    count_html.innerHTML = count.toString()
  else
    count_html.innerHTML = count.toExponential(2).replace("+", "")
}

var cock = setInterval(add_cps, 1000)
