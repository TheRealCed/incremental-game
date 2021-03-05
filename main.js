const count_html = document.getElementById("mainCount")
var count = new Decimal(0)
var plasma_per_second = 0
var plasmas_bought = 1

function increment_count(quantity = 1) {
  count = count.plus(quantity)
  update_display()
}

function add_pps() {
  count = count.plus(plasma_per_second)
  update_display()
}

function increment_pps(amount = 1) {
  plasma_per_second += amount
}

function has_enough(amount) {
  return count.cmp(amount) == 1
}

function deduct(amount = 1) {
  count = count.sub(amount)
  update_display()
}

function buy_plasma(){
  base_price = 2
  // Scale the price exponentially
  let scaled_price = Math.pow(base_price, plasmas_bought)
  if (has_enough(scaled_price)) {
    deduct(scaled_price)
    increment_pps()
    plasmas_bought++
    document.getElementById("PPS_cost").innerHTML = Math.pow(base_price, plasmas_bought)
  }
}

function update_display() {
  if (count.cmp(1000) == -1)
    count_html.innerHTML = count.toString()
  else
    count_html.innerHTML = count.toExponential(2).replace("+", "")
}

var cock = setInterval(add_pps, 1000)
