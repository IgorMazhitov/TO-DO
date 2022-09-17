
const Cal = function(divId) {

    this.divId = divId
    this.DaysOfWeek = [
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun'
    ]

    this.Months =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    let d = new Date()

    this.currMonth = d.getMonth()
    this.currYear = d.getFullYear()
    this.currDay = d.getDate()

  }

  Cal.prototype.nextMonth = function() {

    if ( this.currMonth == 11 ) {

      this.currMonth = 0
      this.currYear = this.currYear + 1

    } else {

      this.currMonth = this.currMonth + 1

    }

    this.showcurr()

  }

  Cal.prototype.previousMonth = function() {

    if ( this.currMonth == 0 ) {

      this.currMonth = 11
      this.currYear = this.currYear - 1

    } else {

      this.currMonth = this.currMonth - 1

    }

    this.showcurr()

  }

  Cal.prototype.showcurr = function() {

    this.showMonth(this.currYear, this.currMonth)

  }

  Cal.prototype.showMonth = function(y, m) {

    let d = new Date()
    , firstDayOfMonth = new Date(y, m, 7).getDay()
    , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
    , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate()

    let html = '<table>'
    html += '<thead><tr>'

    let header = ''
    header += this.Months[m] + ' ' + y

    document.querySelector('#yearMonth').innerHTML = header

    html += '</tr></thead>'
    html += '<tr class="days">'

    for(let i=0; i < this.DaysOfWeek.length;i++) {

      html += '<td>' + this.DaysOfWeek[i] + '</td>'

    }

    html += '</tr>'

    i = 1

    do {

      let dow = new Date(y, m, i).getDay()

      if ( dow == 1 ) {

        html += '<tr>'

      } else if ( i == 1 ) {

        html += '<tr>'

        let k = lastDayOfLastMonth - firstDayOfMonth+1

        for(let j=0; j < firstDayOfMonth; j++) {

          html += '<td class="not-current"; return false;">' + k + '</td>'
          k++

        }
      }

      let chk = new Date()
      let chkY = chk.getFullYear()
      let chkM = chk.getMonth()

      if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {

        html += '<td class="today" onclick="chosen(this); return false;" style="background-color: rgb(255, 255, 255);">' + i + '</td>'

      } else {

        html += '<td class="normal" onclick="chosen(this); return false;" style="background-color: rgb(255, 255, 255);">' + i + '</td>'

      }

      if ( dow == 0 ) {

        html += '</tr>'

      } else if ( i == lastDateOfMonth ) {

        let k=1

        for(dow; dow < 7; dow++) {
          
          html += '<td class="not-current">' + k + '</td>'
          k++

        }
      }

      i++

    } while (i <= lastDateOfMonth)

    html += '</table>'

    let spare = document.querySelector('#divCal')
    spare.innerHTML = html

  }

  function calendarStart() {

    let c = new Cal("divCal")
    c.showcurr()

    getId('btnNext').onclick = function() {

      c.nextMonth()

    }

    getId('btnPrev').onclick = function() {

      c.previousMonth()

    }
  }

  function getId(id) {

    return document.getElementById(id)

  }