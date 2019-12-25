d3.csv("data/ages.csv").then(function(data){
  data.forEach(function(d){
    d.age = +d.age
  })
  const svg = d3.select("#chart-area").append("svg")
      .attr("width", 1000)
      .attr("height", 500)

  const rects = svg.selectAll("rect")
      .data(data)

  rects.enter()
      .append("rect")
          .attr("x", function(d,i){
            return (i * 50) + 25
          })
          .attr("y", 0)
          .attr("width", 200)
          .attr("height", function(d){
            return d.age * 3
          })
          .attr("fill", "blue")
  console.log(data)
})