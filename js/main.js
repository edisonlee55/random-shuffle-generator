/**
 * Copyright (c) edisonlee55
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleArray() {
    let arr = $("#input").val().split("\n");
    shuffle(arr);
    let tmp = "";
    for (let i = 0; i < arr.length; i++) {
        tmp += arr[i];
        if (i != arr.length - 1) {
            tmp += "\n";
        }
    }
    $("#output").val(tmp);
}
