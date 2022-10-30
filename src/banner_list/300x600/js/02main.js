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
        .to([lineframe1, tempdot], 0.5, { opacity: 1, ease: Power1.easeOut }, 'frame1+=1')
        .to(line2frame1, 0, { opacity: 1, ease: Power0.easeOut }, 'frame1+=1.6')
        .to(tempdot, 0, { opacity: 0, ease: Power0.easeOut }, 'frame1+=1.6')
        .to(lineframe1, 0.5, { height: 101, ease: Power1.easeOut }, 'frame1+=3')
        .to([line2frame1, emptydivforline2], 0.5, { top: 342, ease: Power1.easeOut }, 'frame1+=3')
        .to(line2frame1, 1, { left: 206, ease: Power1.easeOut }, 'frame1+=3.5')
        .to(frame1wrapper, 1, { left: -300, ease: Power1.easeOut }, 'frame1+=3.5')
        .to(frame2wrapper, 1, { left: 0, ease: Power1.easeOut }, 'frame1+=3.5')

        .addLabel('frame2', '+=0')
        .to([frame2txt, lineframe1, line2frame1, emptydivforline2], 0.3, { opacity: 0, ease: Power1.easeOut }, 'frame2+=2.5')

        .addLabel('frame3', '+=0')
        .to(epmtyrevealer, 0, { opacity: 1, ease: Power1.easeOut }, 'frame3+=0')
        .to(frame2hepdeltablock, 0.6, { left: 79, top: 229, ease: Power2.easeOut }, 'frame3+=0.5')
        .to(frame2hepblock, 0.6, { left: 79, top: 299, ease: Power2.easeOut }, 'frame3+=0.5')
        .to(hepbtxt2, 0.3, { opacity: 1, ease: Power2.easeOut }, 'frame3+=0.5')
        .to(frame3txt, 0, { opacity: 1, ease: Power2.easeOut }, 'frame3+=1.4')
        .to(frame2hepdeltablock, 0.6, { top: 143, ease: Power1.easeOut }, 'frame3+=1.8')
        .to(epmtyrevealer, 0.6, { top: 95, ease: Power1.easeOut }, 'frame3+=1.8')
        .to(frame2hepblock, 0.6, { top: 346, ease: Power1.easeOut }, 'frame3+=1.8')
        .to(frame2wrapper, 0.3, { opacity: 0, ease: Power1.easeOut }, 'frame3+=5.5')

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
