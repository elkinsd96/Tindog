class Dog {
    constructor(data) {
        Object.assign(this, data);
    }

    setLike() {
        return this.hasBeenLiked = true;
    }

    setSwipe() {
        return this.hasBeenSwiped = true;
    }

    getDogHtml() {
        const { name, avatar, age, bio } = this;
        return ` 
        <div class="badge-container">    
            <img class="badge-icon hidden" id="badge-like" src="/images/badge-like.png">
            <img class="badge-icon hidden" id="badge-swipe" src="/images/badge-nope.png">
        </div>
        <div class="profile">
            <img class="profile-img" src="/${avatar}">
            <div class="profile-text">
                <p class="profile-name">${name}, ${age}</p>
                <p class="profile-summary">${bio}</p>
            </div>
        </div>
        `
    }
}

export default Dog