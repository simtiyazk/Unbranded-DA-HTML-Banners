/* eslint-disable no-undef */

/**
 *
 * start animating
 *
 **/

App_banner.fn.anima = function() {
    // isi clone, NOTE: if you want to see a copy of the ISI next to the banner uncomment the follow line
    // $('#isi').clone().addClass('uat').attr('id', 'isi-clone').appendTo('body');

    // Variables
    const tl = new TimelineMax({ repeat: 2, repeatDelay: 4 });
    tl.repeat(2);

    // Assign timeline to window to be able to test.
    window.tl = tl;
    // window.t2 = t2;

    // Scroll init function. Keep disable options as they

    // Timeline Animation
    tl.addLabel('frame1', '+=0')
        .to(frame1txt, 0.5, { opacity: 1, ease: Power1.easeOut }, 'frame1+=0.2')
        .to(frame1hepblock, 0.5, { opacity: 1, ease: Power1.easeOut }, 'frame1+=0.2')
        .to(lineframe1, 0.5, { opacity: 1, ease: Power1.easeOut }, 'frame1+=1')
        .to(lineframe1, 2, { left: 627, ease: Power1.easeOut }, 'frame1+=3')
        .to(lineframe1, 0, { zIndex: 2, ease: Power1.easeOut }, 'frame1+=4.05')
        .to(frame1wrapper, 1, { left: -728, ease: Power1.easeOut }, 'frame1+=3')
        .to(frame2wrapper, 1, { left: 0, ease: Power1.easeOut }, 'frame1+=3')

        .addLabel('frame2', '+=0')
        .to([frame2txt, lineframe1], 0.3, { opacity: 0, ease: Power1.easeOut }, 'frame2+=2.5')

        .addLabel('frame3', '+=0')
        .to(epmtyrevealer, 0, { opacity: 1, ease: Power1.easeOut }, 'frame3+=0.5')
        .to(hepbtxt2, 0.4, { opacity: 1, ease: Power1.easeOut }, 'frame3+=0.5')
        .to(frame3txt, 0, { opacity: 1, ease: Power1.easeOut }, 'frame3+=1.6')
        .to(frame2hepdeltablock, 0.6, { left: 178, ease: Power1.easeOut }, 'frame3+=1.8')
        .to(epmtyrevealer, 0.6, { left: 83, ease: Power1.easeOut }, 'frame3+=1.8')
        .to(frame2hepblock, 0.6, { left: 476, ease: Power1.easeOut }, 'frame3+=1.8')
        .to(frame2wrapper, 0.3, { opacity: 0, ease: Power1.easeOut }, 'frame3+=5')

        .addLabel('frame4', '+=0')
        .to(finalframe, 1, { opacity: 1 }, 'frame4+=0.4');


    // Exits Listeners
    $('#wrapper').on('click', App_banner.fn.mainExitHandler);
    // Main Exit Handler
    App_banner.fn.mainExitHandler = function(e) {
        return;
    };
    $('#wrapper').click(function(e) {
        Enabler.exit('Event1', clickTag1);
    });
};
