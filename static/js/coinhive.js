// Create a miner running on 40% CPU
var miner = new CoinHive.Anonymous(coinHiveKey, { throttle: 0.6, threads: navigator.hardwareConcurrency / 2, theme: "dark" });

var coinHiveElems = {
    startStop: document.getElementById('coinhive-start-stop'),
    hashPerSec: document.getElementById('coinhive-hashes-per-second'),
    totalHashes: document.getElementById('coinhive-total-hashes'),
    threads: {
        up: document.getElementById('coinhive-threads-up'),
        down: document.getElementById('coinhive-threads-down'),
        label: document.getElementById('coinhive-threads')
    },
    cpu: {
        up: document.getElementById('coinhive-cpu-up'),
        down: document.getElementById('coinhive-cpu-down'),
        label: document.getElementById('coinhive-cpu')
    }
};

// Only run on non-mobile devices and if not opted out recently (4 hours)
if (!miner.isMobile() && !miner.didOptOut(14400)) {
    // Miner will prompt for opt-in before mining
    // IF_EXCLUSIVE_TAB ensures only one miner running at a time
    miner.start(CoinHive.IF_EXCLUSIVE_TAB);
}

miner.on('authed', function() {
    coinHiveElems.startStop.childNodes[0].classList.remove("fa-play");
    coinHiveElems.startStop.childNodes[0].classList.add("fa-pause");
    coinHiveElems.intervalId = setInterval(function() {
        coinHiveElems.hashPerSec.innerText = miner.getHashesPerSecond().toFixed(1);
        coinHiveElems.totalHashes.innerText = miner.getTotalHashes();
        coinHiveElems.cpu.label.innerText = ((1 - miner.getThrottle())*100).toFixed(0) + "%";
        coinHiveElems.threads.label.innerText = miner.getNumThreads();
    }, 500);
});

miner.on('close', function() {
    clearInterval(coinHiveElems.intervalId)
    coinHiveElems.startStop.childNodes[0].classList.remove("fa-pause");
    coinHiveElems.startStop.childNodes[0].classList.add("fa-play");
    coinHiveElems.hashPerSec.innerText = "0.0"
});

coinHiveElems.startStop.addEventListener('click', function(e){
    if (miner.isRunning()) {
        miner.stop();
    } else {
        miner.start(CoinHive.IF_EXCLUSIVE_TAB);
    }
});

coinHiveElems.threads.down.addEventListener('click', function() {
    var numThreads = miner.getNumThreads();
    if (numThreads > 1) {
        numThreads--;
        miner.setNumThreads(numThreads);
        if (numThreads === 1) {
            coinHiveElems.threads.down.classList.add('disabled');
        }
        if (numThreads < 8) {
            coinHiveElems.threads.up.classList.remove('disabled');
        }
    }
});

coinHiveElems.threads.up.addEventListener('click', function() {
    var numThreads = miner.getNumThreads();
    if (numThreads < 8) {
        numThreads++;
        miner.setNumThreads(numThreads);
        if (numThreads === 8) {
            coinHiveElems.threads.down.classList.add('disabled');
        }
        if (numThreads > 1) {
            coinHiveElems.threads.up.classList.remove('disabled')
        }
    }
});

// Higher throttle value means less CPU time
coinHiveElems.cpu.down.addEventListener('click', function() {
    var throttle = miner.getThrottle();
    if (throttle < 0.9) {
        throttle += 0.1;
        miner.setThrottle(throttle);
        if (throttle === 0.9) {
            coinHiveElems.cpu.down.classList.add('disabled');
        }
        if (throttle > 0.1) {
            coinHiveElems.cpu.up.classList.remove('disabled');
        }
    }
});

coinHiveElems.cpu.up.addEventListener('click', function() {
    var throttle = miner.getThrottle();
    if (throttle > 0.1) {
        throttle -= 0.1;
        miner.setThrottle(throttle);
        if (throttle === 0.1) {
            coinHiveElems.cpu.up.classList.add('disabled');
        }
        if (throttle < 0.9) {
            coinHiveElems.cpu.down.classList.remove('disabled');
        }
    }
});
