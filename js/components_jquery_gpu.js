const itemList = jQuery.parseJSON(`{ "gpuList" : }`);

var allObjects = itemList.gpuList.length;
var n = 29;
var m = (allObjects / n) + (allObjects % n);

for (let e = 0; e < allObjects; e++) {
        $("#itemContainer").append(`
        <div class="col mb-5 item_shop">
            <div class="comp-cpu card h-100">
            <img class="object-img card-img-top" src="" alt="preview non disponibile">
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="object-name fw-bolder"></h5>
                    </div>
                </div>
            </div>
        </div>
        `);
        $('.object-name')[e].innerHTML = itemList.gpuList[e].name;
        $('.object-img')[e].src = itemList.gpuList[e].imglink;
}
