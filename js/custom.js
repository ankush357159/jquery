// jQuery("button").click(function() {
//     console.log("Button clicked")
// } )
// $("button").click(function() {
//     console.log("Button clicked")
// })
// jQuery.noConflict()
// jQuery(document).ready(function($) {
//     $("button").click(function() {
//         console.log("Button clicked when page is ready")
//     })
// })


jQuery.noConflict()
// jQuery(document).ready(function($) {
//     $("button").click(function() {
//         console.log("Button is clicked")
//     })

//     $("p").click(function() {
//         alert("Element Selector")
//     })

//     $("#btn-id").click(function() {
//         alert("Id Selector")
//     })

//     $(".btn-class").click(function() {
//         alert("Class Selector")
//     })
// })

// jQuery(document).ready(function($) {
//     // Mouse Events
//     $("p").click(function() {
//         console.log("Clicked")
//     })

//     $("p").dblclick(function() {
//         console.log("Double clicked")
//     })

//     $("p").mouseenter(function() {
//         console.log("Mouse Entered")
//     })

//     $("p").mouseleave(function() {
//         console.log("Mouse left")
//     })


//     // Keyboard events
//     $("#name").keypress(function() {
//         console.log("Key pressed")
//     })

//     $("#name").keydown(function() {
//         console.log("Key down")
//     })

//     $("#name").keyup(function() {
//         console.log("Key up")
//     })


//     // Form events
//     $("#fname").focus(function() {
//         console.log("Focus field")
//     })

//     $("#fname").blur(function() {
//         console.log("blur")
//     })

//     $("#form-id").submit(function(e) {
//         console.log("Form submitted")
//         e.preventDefault()

//     })


//     // Window event
//     $(window).resize(function() {
//         console.log("Window resized")
//     })
// })

jQuery(document).ready(function($) {
    // Hide Image
    $("#btn-hide").click(function() {
        $("#image-id").hide(2000,function() {
            console.log("Image is hidden by user")
        })

        $("#btn-hide").hide(1000, function() {
            console.log("Button hidden by user")
        })
    })

    // Show Image
    $("#btn-show").click(function() {
        $("#image-id").show(1000,function() {
            console.log("Image returned back by the user")
        })

        $("#btn-hide").show(1000, function() {
            console.log("Button made visible by user")
        })

    })

    // Hide and show image - toggle
    $("#btn-toggle").click(function() {
        $("#image-id").toggle(1000,function() {
            console.log("Toggled Image by the user")
        })
    })

    // Fade out
    $("#btn-fade-out").click(function() {
        $("#image-id").fadeOut(1000,function() {
            console.log("Image faded out")
        })
    })

    // Fade In
    $("#btn-fade-in").click(function() {
        $("#image-id").fadeIn(1000,function() {
            console.log("Image faded In")
        })
    })

    $("#btn-fade-toggle").click(function() {
        $("#image-id").fadeToggle(1000, function() {
            console.log("Image toggled")
        })
    })

    $("#btn-fade-to").click(function() {
        $("#image-id").fadeTo(1000, 0.5, function() {
            console.log("Image Faded")
        })
    })

    $("#btn-slide-down").click(function() {
        $("#image-id").slideDown(1000, function() {
            console.log("Image slided down")
        })
    })


    $("#btn-slide-up").click(function() {
        $("#image-id").slideUp(2000, function() {
            console.log("Image slided up")
        })
    })


    $("#btn-slide-toggle").click(function() {
        $("#image-id").slideToggle(1000, function() {
            console.log("Image toggle")
        })
    })

    // Animate
    $("#btn-animate").click(function() {
        $("#nature-image").animate({left:"+=80"},1000, function() {
            console.log("Image animated by user")
        })
    })
    // Get text
    let textData = $("p").text();
    console.log(textData)

    // Set text
    $("#btn-set-data").click(function() {
        new_text = "This is sample text"
        $("p").text(new_text)
    })

    // Get HTML
    let htmlData = $("p").html()
    console.log(htmlData)

    // Set html
    $("#btn-set-html").click(function() {
        new_html = "<b>This is html text</b>"
        $("p").html(new_html)
    })

   input_value =  $("#input-id").val()
   console.log(input_value)

   $("#btn-set-value").click(function() {
        new_input_value = "Hello World!"
       $("#input-id").val(new_input_value)
   })
     

}) 



