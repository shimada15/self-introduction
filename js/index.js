'use strict';

const profile = document.getElementById('profile');
const PR = document.getElementById('PR');
const skill = document.getElementById('skill');
const comment_profile = document.getElementById('comment-profile');
const comment_PR = document.getElementById('comment-PR');
const comment_skill = document.getElementById('comment-skill');

PR.addEventListener('mouseover', () => {
    PR.className = 'textbox-click';
})
profile.addEventListener('mouseover', () => {
    profile.className = 'textbox-click';
})
skill.addEventListener('mouseover', () => {
    skill.className = 'textbox-click';
})

PR.addEventListener('mouseleave', () => {
    PR.className = 'textbox';
})
profile.addEventListener('mouseleave', () => {
    profile.className = 'textbox';
})
skill.addEventListener('mouseleave', () => {
    skill.className = 'textbox';
})

comment_PR.style.display = "none";
comment_skill.style.display = "none";

profile.addEventListener('click', () => {
    comment_profile.style.display = "block";
    comment_profile.animate([{ opacity: '0' }, { opacity: '1' }], 1500);
    comment_PR.style.display = "none";
    comment_skill.style.display = "none";
})
PR.addEventListener('click', () => {
    comment_profile.style.display = "none";
    comment_PR.style.display = "block";
    comment_PR.animate([{ opacity: '0' }, { opacity: '1' }], 1500);
    comment_skill.style.display = "none";
})
skill.addEventListener('click', () => {
    comment_profile.style.display = "none";
    comment_PR.style.display = "none";
    comment_skill.style.display = "block";
    comment_skill.animate([{ opacity: '0' }, { opacity: '1' }], 1500);
})