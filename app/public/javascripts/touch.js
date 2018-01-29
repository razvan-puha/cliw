var dayTimetables = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri']
var scheduleByDay = {'Marti' : [ {'course_name' : 'ACSO', 'start_time':'08:00', 'end_time':'10:00', 'room': 'C210', 'type': 'Curs'},
{'course_name' : 'ACSO', 'start_time':'10:00', 'end_time':'12:00', 'room': 'C210', 'type': 'Curs'},
{'course_name' : 'DAWNC', 'start_time':'12:00', 'end_time':'14:00', 'room': 'C411', 'type': 'Laborator'},
{'course_name' : 'TW', 'start_time':'14:00', 'end_time':'16:00', 'room': 'C2', 'type': 'Curs'},
{'course_name' : 'BD', 'start_time':'16:00', 'end_time':'18:00', 'room': 'C410', 'type': 'Laborator',},
{'course_name' : 'Matematica', 'start_time':'18:00', 'end_time':'20:00', 'room': 'C2', 'type': 'Curs'},],
                    'Miercuri' : [{'course_name' : 'ACSO', 'start_time':'08:00', 'end_time':'10:00', 'room': 'C210', 'type': 'Curs'},
 {'course_name' : 'BLABLA', 'start_time':'08:00', 'end_time':'10:00', 'room': 'C253', 'type': 'Curs'},
 {'course_name' : 'ALBALB', 'start_time':'08:00', 'end_time':'10:00', 'room': 'C2123', 'type': 'Curs'}]}


var newTimetable = ""


function scrollTimetableTo(nextIndex) {
    var timetableMobileDiv = document.getElementById('timetable-mobile')
    // console.log(scheduleByDay)
    var nextDay = dayTimetables[nextIndex]

    newTimetable = '<div class="day-title">' + nextDay + '</div>'

    if (nextDay == "Marti") {
        newTimetable = newTimetable + '<div class="day-list"><ul>'
        
        tuesdaySchedule = scheduleByDay['Marti']
        console.log(tuesdaySchedule.values)
        for (var i = 0; i<tuesdaySchedule.length; i++) {
        // for (var obj in tuesdaySchedule) {
            var obj = tuesdaySchedule[i] 
            console.log(obj["course_name"])
            console.log(obj)
            newTimetable = newTimetable + `<li class="day-list-item">
            <a class="day-list-item-course day-list-item-has-color" href="http://">
                <div class="day-list-item-color"></div>
                <div class="day-list-item-text">
                    <div class="day-list-item-course-title">`
            newTimetable = newTimetable + obj["course_name"]
            newTimetable = newTimetable + '</div> <div class="day-list-item-course-time">'
            newTimetable = newTimetable  + obj["start_time"] + ' - ' + obj["end_time"] + '</div> <div class="day-list-item-course-description">'
            newTimetable = newTimetable + obj["type"] + ', ' + obj["room"]
            newTimetable = newTimetable + `</div>
                </div>
             </a>
        </li>`
            newTimetable = newTimetable + '</ul> </div>'
        }
    } else {
        // console.log('bla')
        newTimetable = newTimetable + `<div class="day-list">
        <ul>
            <li class="day-list-item">
                <a class="day-list-item-course day-list-item-has-color" href="http://">
                    <div class="day-list-item-color"></div>
                    <div class="day-list-item-text">
                        <div class="day-list-item-course-title">
                            ACSO
                        </div>
                        <div class="day-list-item-course-time">
                            08:00 - 10:00
                        </div>
                        <div class="day-list-item-course-description">
                            Curs, Sala: C112
                        </div>
                    </div>
                </a>
            </li>
            <li class="day-list-item">
                <a class="day-list-item-course day-list-item-has-color" href="http://">
                    <div class="day-list-item-color"></div>
                    <div class="day-list-item-text">
                        <div class="day-list-item-course-title">
                            SI
                        </div>
                        <div class="day-list-item-course-time">
                            10:00 - 12:00
                        </div>
                        <div class="day-list-item-course-description">
                            Seminar, Sala: C413
                        </div>
                    </div>
                </a>
            </li>
    
            <li class="day-list-item">
                <a class="day-list-item-course day-list-item-has-color" href="http://">
                    <div class="day-list-item-color"></div>
                    <div class="day-list-item-text">
                        <div class="day-list-item-course-title">
                            CLIW
                        </div>
                        <div class="day-list-item-course-time">
                            12:00 - 14:00
                        </div>
                        <div class="day-list-item-course-description">
                            Laborator, Sala: C409
                        </div>
                    </div>
                </a>
            </li>
            <li class="day-list-item">
                <a class="day-list-item-course day-list-item-has-color" href="http://">
                    <div class="day-list-item-color"></div>
                    <div class="day-list-item-text">
                        <div class="day-list-item-course-title">
                            LIBER
                        </div>
                        <div class="day-list-item-course-time">
                            14:00 - 16:00
                        </div>
                        <div class="day-list-item-course-description">
                        </div>
                    </div>
                </a>
            </li>
            <li class="day-list-item">
                <a class="day-list-item-course day-list-item-has-color" href="http://">
                    <div class="day-list-item-color"></div>
                    <div class="day-list-item-text">
                        <div class="day-list-item-course-title">
                            LIBER
                        </div>
                        <div class="day-list-item-course-time">
                            16:00 - 18:00
                        </div>
                    </div>
                </a>
            </li>
            <li class="day-list-item">
                <a class="day-list-item-course day-list-item-has-color" href="http://">
                    <div class="day-list-item-color"></div>
                    <div class="day-list-item-text">
                        <div class="day-list-item-course-title">
                            BD
                        </div>
                        <div class="day-list-item-course-time">
                            14:00 - 16:00
                        </div>
                        <div class="day-list-item-course-description">
                            Laborator, Sala: C405
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>`
    }

    timetableMobileDiv.innerHTML = newTimetable;
    listen_for_touch("timetable-mobile")
}

var target = ""

var touchStartHandler = function (e) {
    var touchObject = e.changedTouches[0] // reference first touch point (ie: first finger)
    startX = parseInt(touchObject.clientX) // get x position of touch point relative to left edge of browser
    e.preventDefault()
}

var touchMoveHandler = function (e) {
    var touchObject = e.changedTouches[0] // reference first touch point for this event
    var dist = parseInt(touchObject.clientX) - startX
    e.preventDefault()
}

var touchEndHandler = function (e) {
    var touchObject = e.changedTouches[0] // reference first touch point for this event
    finalX = touchObject.clientX
    e.preventDefault()
    
    var difference = startX - finalX < 0 ? finalX - startX : startX - finalX
    if (difference < 200 )
        return

    var indexOfTarget = dayTimetables.indexOf(target.children[0].innerHTML)
    var nextIndex = 0

    if (startX < finalX) {
        //swiped to the right => move to previous day
        nextIndex = indexOfTarget - 1 < 0 ? 4 : indexOfTarget - 1
    } else if (startX > finalX) {
        //swiped to the left => move to next day
        nextIndex = indexOfTarget + 1 > 4 ? 0 : indexOfTarget + 1
    }

    // console.log(nextIndex, indexOfTarget)
    window.removeEventListener('load', windowTouchHandler)
    target.removeEventListener('touchstart',touchStartHandler)
    target.removeEventListener('touchmove',touchMoveHandler)
    target.removeEventListener('touchend',touchEndHandler)
    scrollTimetableTo(nextIndex)
}

var windowTouchHandler = function (targetId) {
    target = document.getElementById(targetId)
    // console.log(targetId)

    var startX = 0
    var finalX = 0
    var dist = 0

    target.addEventListener('touchstart', touchStartHandler , false)
    target.addEventListener('touchmove', touchMoveHandler, false)
    target.addEventListener('touchend', touchEndHandler, false)
}

function listen_for_touch(targetId) {
    // console.log('i start to listen')
    window.addEventListener('load', windowTouchHandler(targetId), false)

    return false
}

function slideDiv() {
    var elem = document.getElementById("timetable-mobile");   
    var pos = 0;
    var id = setInterval(frame, 5);

    var divWidth = elem.getAttribute('width')

    function frame() {
      if (pos - divWidth == 0 ) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.left = pos + 'px'; 
      }
    }
  }