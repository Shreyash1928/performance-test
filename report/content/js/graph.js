/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 177.0, "minX": 0.0, "maxY": 5358.0, "series": [{"data": [[0.0, 177.0], [0.1, 177.0], [0.2, 178.0], [0.3, 178.0], [0.4, 179.0], [0.5, 179.0], [0.6, 179.0], [0.7, 179.0], [0.8, 179.0], [0.9, 179.0], [1.0, 179.0], [1.1, 179.0], [1.2, 179.0], [1.3, 180.0], [1.4, 180.0], [1.5, 180.0], [1.6, 181.0], [1.7, 181.0], [1.8, 181.0], [1.9, 181.0], [2.0, 181.0], [2.1, 181.0], [2.2, 182.0], [2.3, 182.0], [2.4, 182.0], [2.5, 183.0], [2.6, 183.0], [2.7, 183.0], [2.8, 183.0], [2.9, 183.0], [3.0, 183.0], [3.1, 183.0], [3.2, 184.0], [3.3, 184.0], [3.4, 184.0], [3.5, 184.0], [3.6, 185.0], [3.7, 185.0], [3.8, 185.0], [3.9, 187.0], [4.0, 187.0], [4.1, 187.0], [4.2, 188.0], [4.3, 188.0], [4.4, 188.0], [4.5, 188.0], [4.6, 188.0], [4.7, 189.0], [4.8, 189.0], [4.9, 189.0], [5.0, 189.0], [5.1, 190.0], [5.2, 190.0], [5.3, 190.0], [5.4, 190.0], [5.5, 190.0], [5.6, 190.0], [5.7, 190.0], [5.8, 190.0], [5.9, 190.0], [6.0, 190.0], [6.1, 191.0], [6.2, 191.0], [6.3, 191.0], [6.4, 191.0], [6.5, 192.0], [6.6, 192.0], [6.7, 193.0], [6.8, 193.0], [6.9, 193.0], [7.0, 193.0], [7.1, 193.0], [7.2, 193.0], [7.3, 193.0], [7.4, 193.0], [7.5, 194.0], [7.6, 194.0], [7.7, 194.0], [7.8, 194.0], [7.9, 196.0], [8.0, 196.0], [8.1, 196.0], [8.2, 196.0], [8.3, 197.0], [8.4, 198.0], [8.5, 198.0], [8.6, 199.0], [8.7, 199.0], [8.8, 200.0], [8.9, 200.0], [9.0, 200.0], [9.1, 200.0], [9.2, 204.0], [9.3, 204.0], [9.4, 204.0], [9.5, 204.0], [9.6, 204.0], [9.7, 204.0], [9.8, 205.0], [9.9, 205.0], [10.0, 208.0], [10.1, 208.0], [10.2, 209.0], [10.3, 209.0], [10.4, 209.0], [10.5, 209.0], [10.6, 210.0], [10.7, 210.0], [10.8, 214.0], [10.9, 214.0], [11.0, 215.0], [11.1, 215.0], [11.2, 216.0], [11.3, 216.0], [11.4, 217.0], [11.5, 217.0], [11.6, 218.0], [11.7, 218.0], [11.8, 218.0], [11.9, 218.0], [12.0, 219.0], [12.1, 219.0], [12.2, 219.0], [12.3, 219.0], [12.4, 222.0], [12.5, 222.0], [12.6, 225.0], [12.7, 225.0], [12.8, 228.0], [12.9, 228.0], [13.0, 230.0], [13.1, 230.0], [13.2, 233.0], [13.3, 233.0], [13.4, 236.0], [13.5, 236.0], [13.6, 236.0], [13.7, 236.0], [13.8, 237.0], [13.9, 237.0], [14.0, 237.0], [14.1, 237.0], [14.2, 241.0], [14.3, 241.0], [14.4, 243.0], [14.5, 243.0], [14.6, 244.0], [14.7, 244.0], [14.8, 245.0], [14.9, 245.0], [15.0, 246.0], [15.1, 246.0], [15.2, 246.0], [15.3, 246.0], [15.4, 248.0], [15.5, 248.0], [15.6, 250.0], [15.7, 250.0], [15.8, 250.0], [15.9, 250.0], [16.0, 252.0], [16.1, 252.0], [16.2, 252.0], [16.3, 252.0], [16.4, 254.0], [16.5, 254.0], [16.6, 255.0], [16.7, 255.0], [16.8, 256.0], [16.9, 256.0], [17.0, 257.0], [17.1, 257.0], [17.2, 258.0], [17.3, 258.0], [17.4, 261.0], [17.5, 261.0], [17.6, 262.0], [17.7, 262.0], [17.8, 266.0], [17.9, 266.0], [18.0, 270.0], [18.1, 270.0], [18.2, 273.0], [18.3, 273.0], [18.4, 281.0], [18.5, 281.0], [18.6, 281.0], [18.7, 281.0], [18.8, 282.0], [18.9, 282.0], [19.0, 284.0], [19.1, 284.0], [19.2, 285.0], [19.3, 285.0], [19.4, 285.0], [19.5, 285.0], [19.6, 288.0], [19.7, 288.0], [19.8, 292.0], [19.9, 292.0], [20.0, 292.0], [20.1, 292.0], [20.2, 294.0], [20.3, 294.0], [20.4, 295.0], [20.5, 295.0], [20.6, 295.0], [20.7, 295.0], [20.8, 299.0], [20.9, 299.0], [21.0, 301.0], [21.1, 301.0], [21.2, 305.0], [21.3, 305.0], [21.4, 309.0], [21.5, 309.0], [21.6, 314.0], [21.7, 314.0], [21.8, 315.0], [21.9, 315.0], [22.0, 316.0], [22.1, 316.0], [22.2, 317.0], [22.3, 317.0], [22.4, 318.0], [22.5, 318.0], [22.6, 319.0], [22.7, 319.0], [22.8, 322.0], [22.9, 322.0], [23.0, 323.0], [23.1, 323.0], [23.2, 324.0], [23.3, 324.0], [23.4, 325.0], [23.5, 325.0], [23.6, 328.0], [23.7, 328.0], [23.8, 331.0], [23.9, 331.0], [24.0, 331.0], [24.1, 331.0], [24.2, 333.0], [24.3, 333.0], [24.4, 336.0], [24.5, 336.0], [24.6, 336.0], [24.7, 336.0], [24.8, 336.0], [24.9, 336.0], [25.0, 337.0], [25.1, 337.0], [25.2, 339.0], [25.3, 339.0], [25.4, 345.0], [25.5, 345.0], [25.6, 345.0], [25.7, 345.0], [25.8, 345.0], [25.9, 345.0], [26.0, 346.0], [26.1, 346.0], [26.2, 346.0], [26.3, 346.0], [26.4, 347.0], [26.5, 347.0], [26.6, 349.0], [26.7, 349.0], [26.8, 358.0], [26.9, 358.0], [27.0, 358.0], [27.1, 358.0], [27.2, 359.0], [27.3, 359.0], [27.4, 361.0], [27.5, 361.0], [27.6, 363.0], [27.7, 363.0], [27.8, 364.0], [27.9, 364.0], [28.0, 368.0], [28.1, 368.0], [28.2, 371.0], [28.3, 371.0], [28.4, 372.0], [28.5, 372.0], [28.6, 374.0], [28.7, 374.0], [28.8, 374.0], [28.9, 374.0], [29.0, 392.0], [29.1, 392.0], [29.2, 393.0], [29.3, 393.0], [29.4, 394.0], [29.5, 394.0], [29.6, 395.0], [29.7, 395.0], [29.8, 399.0], [29.9, 399.0], [30.0, 404.0], [30.1, 404.0], [30.2, 406.0], [30.3, 406.0], [30.4, 406.0], [30.5, 406.0], [30.6, 407.0], [30.7, 407.0], [30.8, 407.0], [30.9, 407.0], [31.0, 407.0], [31.1, 407.0], [31.2, 411.0], [31.3, 411.0], [31.4, 413.0], [31.5, 413.0], [31.6, 414.0], [31.7, 414.0], [31.8, 418.0], [31.9, 418.0], [32.0, 428.0], [32.1, 428.0], [32.2, 432.0], [32.3, 432.0], [32.4, 440.0], [32.5, 440.0], [32.6, 443.0], [32.7, 443.0], [32.8, 448.0], [32.9, 448.0], [33.0, 449.0], [33.1, 449.0], [33.2, 451.0], [33.3, 451.0], [33.4, 452.0], [33.5, 452.0], [33.6, 454.0], [33.7, 454.0], [33.8, 454.0], [33.9, 454.0], [34.0, 463.0], [34.1, 463.0], [34.2, 463.0], [34.3, 463.0], [34.4, 464.0], [34.5, 464.0], [34.6, 466.0], [34.7, 466.0], [34.8, 468.0], [34.9, 468.0], [35.0, 470.0], [35.1, 470.0], [35.2, 476.0], [35.3, 476.0], [35.4, 481.0], [35.5, 481.0], [35.6, 487.0], [35.7, 487.0], [35.8, 497.0], [35.9, 497.0], [36.0, 499.0], [36.1, 499.0], [36.2, 501.0], [36.3, 501.0], [36.4, 502.0], [36.5, 502.0], [36.6, 507.0], [36.7, 507.0], [36.8, 507.0], [36.9, 507.0], [37.0, 508.0], [37.1, 508.0], [37.2, 517.0], [37.3, 517.0], [37.4, 518.0], [37.5, 518.0], [37.6, 518.0], [37.7, 518.0], [37.8, 521.0], [37.9, 521.0], [38.0, 528.0], [38.1, 528.0], [38.2, 537.0], [38.3, 537.0], [38.4, 537.0], [38.5, 544.0], [38.6, 544.0], [38.7, 545.0], [38.8, 545.0], [38.9, 553.0], [39.0, 553.0], [39.1, 562.0], [39.2, 562.0], [39.3, 563.0], [39.4, 563.0], [39.5, 569.0], [39.6, 569.0], [39.7, 571.0], [39.8, 571.0], [39.9, 572.0], [40.0, 572.0], [40.1, 575.0], [40.2, 575.0], [40.3, 583.0], [40.4, 583.0], [40.5, 589.0], [40.6, 589.0], [40.7, 595.0], [40.8, 595.0], [40.9, 602.0], [41.0, 602.0], [41.1, 602.0], [41.2, 602.0], [41.3, 603.0], [41.4, 603.0], [41.5, 606.0], [41.6, 606.0], [41.7, 608.0], [41.8, 608.0], [41.9, 608.0], [42.0, 608.0], [42.1, 617.0], [42.2, 617.0], [42.3, 617.0], [42.4, 617.0], [42.5, 619.0], [42.6, 619.0], [42.7, 619.0], [42.8, 619.0], [42.9, 620.0], [43.0, 620.0], [43.1, 625.0], [43.2, 625.0], [43.3, 630.0], [43.4, 630.0], [43.5, 638.0], [43.6, 638.0], [43.7, 639.0], [43.8, 639.0], [43.9, 657.0], [44.0, 657.0], [44.1, 663.0], [44.2, 663.0], [44.3, 667.0], [44.4, 667.0], [44.5, 667.0], [44.6, 667.0], [44.7, 669.0], [44.8, 669.0], [44.9, 673.0], [45.0, 673.0], [45.1, 680.0], [45.2, 680.0], [45.3, 684.0], [45.4, 684.0], [45.5, 687.0], [45.6, 687.0], [45.7, 691.0], [45.8, 691.0], [45.9, 692.0], [46.0, 692.0], [46.1, 699.0], [46.2, 699.0], [46.3, 699.0], [46.4, 699.0], [46.5, 700.0], [46.6, 700.0], [46.7, 705.0], [46.8, 705.0], [46.9, 706.0], [47.0, 706.0], [47.1, 706.0], [47.2, 706.0], [47.3, 718.0], [47.4, 718.0], [47.5, 718.0], [47.6, 718.0], [47.7, 719.0], [47.8, 719.0], [47.9, 726.0], [48.0, 726.0], [48.1, 733.0], [48.2, 733.0], [48.3, 735.0], [48.4, 735.0], [48.5, 739.0], [48.6, 739.0], [48.7, 742.0], [48.8, 742.0], [48.9, 744.0], [49.0, 744.0], [49.1, 749.0], [49.2, 749.0], [49.3, 759.0], [49.4, 759.0], [49.5, 761.0], [49.6, 761.0], [49.7, 774.0], [49.8, 774.0], [49.9, 776.0], [50.0, 776.0], [50.1, 783.0], [50.2, 783.0], [50.3, 783.0], [50.4, 783.0], [50.5, 785.0], [50.6, 785.0], [50.7, 785.0], [50.8, 785.0], [50.9, 798.0], [51.0, 798.0], [51.1, 799.0], [51.2, 799.0], [51.3, 804.0], [51.4, 804.0], [51.5, 808.0], [51.6, 808.0], [51.7, 810.0], [51.8, 810.0], [51.9, 811.0], [52.0, 811.0], [52.1, 812.0], [52.2, 812.0], [52.3, 813.0], [52.4, 813.0], [52.5, 815.0], [52.6, 815.0], [52.7, 822.0], [52.8, 822.0], [52.9, 823.0], [53.0, 823.0], [53.1, 831.0], [53.2, 831.0], [53.3, 842.0], [53.4, 842.0], [53.5, 844.0], [53.6, 844.0], [53.7, 856.0], [53.8, 856.0], [53.9, 857.0], [54.0, 857.0], [54.1, 859.0], [54.2, 859.0], [54.3, 861.0], [54.4, 861.0], [54.5, 862.0], [54.6, 862.0], [54.7, 864.0], [54.8, 864.0], [54.9, 872.0], [55.0, 872.0], [55.1, 875.0], [55.2, 875.0], [55.3, 880.0], [55.4, 880.0], [55.5, 880.0], [55.6, 880.0], [55.7, 884.0], [55.8, 884.0], [55.9, 886.0], [56.0, 886.0], [56.1, 887.0], [56.2, 887.0], [56.3, 889.0], [56.4, 889.0], [56.5, 895.0], [56.6, 895.0], [56.7, 896.0], [56.8, 896.0], [56.9, 902.0], [57.0, 902.0], [57.1, 904.0], [57.2, 904.0], [57.3, 905.0], [57.4, 905.0], [57.5, 905.0], [57.6, 905.0], [57.7, 925.0], [57.8, 925.0], [57.9, 926.0], [58.0, 926.0], [58.1, 937.0], [58.2, 937.0], [58.3, 937.0], [58.4, 937.0], [58.5, 940.0], [58.6, 940.0], [58.7, 941.0], [58.8, 941.0], [58.9, 957.0], [59.0, 957.0], [59.1, 962.0], [59.2, 962.0], [59.3, 965.0], [59.4, 965.0], [59.5, 966.0], [59.6, 966.0], [59.7, 970.0], [59.8, 970.0], [59.9, 979.0], [60.0, 979.0], [60.1, 983.0], [60.2, 983.0], [60.3, 984.0], [60.4, 984.0], [60.5, 991.0], [60.6, 991.0], [60.7, 991.0], [60.8, 991.0], [60.9, 996.0], [61.0, 996.0], [61.1, 997.0], [61.2, 997.0], [61.3, 998.0], [61.4, 998.0], [61.5, 1007.0], [61.6, 1007.0], [61.7, 1012.0], [61.8, 1012.0], [61.9, 1018.0], [62.0, 1018.0], [62.1, 1019.0], [62.2, 1019.0], [62.3, 1026.0], [62.4, 1026.0], [62.5, 1032.0], [62.6, 1032.0], [62.7, 1037.0], [62.8, 1037.0], [62.9, 1042.0], [63.0, 1042.0], [63.1, 1043.0], [63.2, 1043.0], [63.3, 1046.0], [63.4, 1046.0], [63.5, 1046.0], [63.6, 1046.0], [63.7, 1050.0], [63.8, 1050.0], [63.9, 1055.0], [64.0, 1055.0], [64.1, 1055.0], [64.2, 1055.0], [64.3, 1057.0], [64.4, 1057.0], [64.5, 1058.0], [64.6, 1058.0], [64.7, 1060.0], [64.8, 1060.0], [64.9, 1067.0], [65.0, 1067.0], [65.1, 1069.0], [65.2, 1069.0], [65.3, 1073.0], [65.4, 1073.0], [65.5, 1080.0], [65.6, 1080.0], [65.7, 1080.0], [65.8, 1080.0], [65.9, 1081.0], [66.0, 1081.0], [66.1, 1099.0], [66.2, 1099.0], [66.3, 1100.0], [66.4, 1100.0], [66.5, 1101.0], [66.6, 1101.0], [66.7, 1111.0], [66.8, 1111.0], [66.9, 1130.0], [67.0, 1130.0], [67.1, 1133.0], [67.2, 1133.0], [67.3, 1139.0], [67.4, 1139.0], [67.5, 1148.0], [67.6, 1148.0], [67.7, 1157.0], [67.8, 1157.0], [67.9, 1158.0], [68.0, 1158.0], [68.1, 1163.0], [68.2, 1163.0], [68.3, 1174.0], [68.4, 1174.0], [68.5, 1175.0], [68.6, 1175.0], [68.7, 1179.0], [68.8, 1179.0], [68.9, 1183.0], [69.0, 1183.0], [69.1, 1188.0], [69.2, 1188.0], [69.3, 1212.0], [69.4, 1212.0], [69.5, 1212.0], [69.6, 1212.0], [69.7, 1215.0], [69.8, 1215.0], [69.9, 1227.0], [70.0, 1227.0], [70.1, 1232.0], [70.2, 1232.0], [70.3, 1237.0], [70.4, 1237.0], [70.5, 1240.0], [70.6, 1240.0], [70.7, 1242.0], [70.8, 1242.0], [70.9, 1249.0], [71.0, 1249.0], [71.1, 1251.0], [71.2, 1251.0], [71.3, 1257.0], [71.4, 1257.0], [71.5, 1259.0], [71.6, 1259.0], [71.7, 1259.0], [71.8, 1259.0], [71.9, 1259.0], [72.0, 1259.0], [72.1, 1271.0], [72.2, 1271.0], [72.3, 1277.0], [72.4, 1277.0], [72.5, 1300.0], [72.6, 1300.0], [72.7, 1301.0], [72.8, 1301.0], [72.9, 1318.0], [73.0, 1318.0], [73.1, 1319.0], [73.2, 1319.0], [73.3, 1321.0], [73.4, 1321.0], [73.5, 1322.0], [73.6, 1322.0], [73.7, 1323.0], [73.8, 1323.0], [73.9, 1326.0], [74.0, 1326.0], [74.1, 1329.0], [74.2, 1329.0], [74.3, 1344.0], [74.4, 1344.0], [74.5, 1357.0], [74.6, 1357.0], [74.7, 1358.0], [74.8, 1358.0], [74.9, 1370.0], [75.0, 1370.0], [75.1, 1381.0], [75.2, 1381.0], [75.3, 1383.0], [75.4, 1383.0], [75.5, 1389.0], [75.6, 1389.0], [75.7, 1389.0], [75.8, 1389.0], [75.9, 1394.0], [76.0, 1394.0], [76.1, 1399.0], [76.2, 1399.0], [76.3, 1404.0], [76.4, 1404.0], [76.5, 1408.0], [76.6, 1408.0], [76.7, 1414.0], [76.8, 1414.0], [76.9, 1416.0], [77.0, 1416.0], [77.1, 1417.0], [77.2, 1417.0], [77.3, 1419.0], [77.4, 1419.0], [77.5, 1422.0], [77.6, 1422.0], [77.7, 1424.0], [77.8, 1424.0], [77.9, 1431.0], [78.0, 1431.0], [78.1, 1433.0], [78.2, 1433.0], [78.3, 1445.0], [78.4, 1445.0], [78.5, 1445.0], [78.6, 1445.0], [78.7, 1467.0], [78.8, 1467.0], [78.9, 1496.0], [79.0, 1496.0], [79.1, 1496.0], [79.2, 1496.0], [79.3, 1511.0], [79.4, 1511.0], [79.5, 1515.0], [79.6, 1515.0], [79.7, 1533.0], [79.8, 1533.0], [79.9, 1535.0], [80.0, 1535.0], [80.1, 1543.0], [80.2, 1543.0], [80.3, 1557.0], [80.4, 1557.0], [80.5, 1559.0], [80.6, 1559.0], [80.7, 1565.0], [80.8, 1565.0], [80.9, 1565.0], [81.0, 1565.0], [81.1, 1571.0], [81.2, 1571.0], [81.3, 1599.0], [81.4, 1599.0], [81.5, 1599.0], [81.6, 1599.0], [81.7, 1624.0], [81.8, 1624.0], [81.9, 1626.0], [82.0, 1626.0], [82.1, 1647.0], [82.2, 1647.0], [82.3, 1686.0], [82.4, 1686.0], [82.5, 1695.0], [82.6, 1695.0], [82.7, 1716.0], [82.8, 1716.0], [82.9, 1754.0], [83.0, 1754.0], [83.1, 1758.0], [83.2, 1758.0], [83.3, 1783.0], [83.4, 1783.0], [83.5, 1785.0], [83.6, 1785.0], [83.7, 1789.0], [83.8, 1789.0], [83.9, 1807.0], [84.0, 1807.0], [84.1, 1808.0], [84.2, 1808.0], [84.3, 1812.0], [84.4, 1812.0], [84.5, 1814.0], [84.6, 1814.0], [84.7, 1818.0], [84.8, 1818.0], [84.9, 1849.0], [85.0, 1849.0], [85.1, 1889.0], [85.2, 1889.0], [85.3, 1891.0], [85.4, 1891.0], [85.5, 1910.0], [85.6, 1910.0], [85.7, 1919.0], [85.8, 1919.0], [85.9, 1926.0], [86.0, 1926.0], [86.1, 1929.0], [86.2, 1929.0], [86.3, 1976.0], [86.4, 1976.0], [86.5, 1987.0], [86.6, 1987.0], [86.7, 1998.0], [86.8, 1998.0], [86.9, 2038.0], [87.0, 2038.0], [87.1, 2042.0], [87.2, 2042.0], [87.3, 2053.0], [87.4, 2053.0], [87.5, 2062.0], [87.6, 2062.0], [87.7, 2068.0], [87.8, 2068.0], [87.9, 2085.0], [88.0, 2085.0], [88.1, 2088.0], [88.2, 2088.0], [88.3, 2089.0], [88.4, 2089.0], [88.5, 2101.0], [88.6, 2101.0], [88.7, 2105.0], [88.8, 2105.0], [88.9, 2112.0], [89.0, 2112.0], [89.1, 2114.0], [89.2, 2114.0], [89.3, 2117.0], [89.4, 2117.0], [89.5, 2117.0], [89.6, 2117.0], [89.7, 2123.0], [89.8, 2123.0], [89.9, 2135.0], [90.0, 2135.0], [90.1, 2162.0], [90.2, 2162.0], [90.3, 2184.0], [90.4, 2184.0], [90.5, 2216.0], [90.6, 2216.0], [90.7, 2223.0], [90.8, 2223.0], [90.9, 2239.0], [91.0, 2239.0], [91.1, 2248.0], [91.2, 2248.0], [91.3, 2263.0], [91.4, 2263.0], [91.5, 2272.0], [91.6, 2272.0], [91.7, 2272.0], [91.8, 2272.0], [91.9, 2282.0], [92.0, 2282.0], [92.1, 2295.0], [92.2, 2295.0], [92.3, 2305.0], [92.4, 2305.0], [92.5, 2317.0], [92.6, 2317.0], [92.7, 2318.0], [92.8, 2318.0], [92.9, 2325.0], [93.0, 2325.0], [93.1, 2337.0], [93.2, 2337.0], [93.3, 2339.0], [93.4, 2339.0], [93.5, 2348.0], [93.6, 2348.0], [93.7, 2386.0], [93.8, 2386.0], [93.9, 2408.0], [94.0, 2408.0], [94.1, 2439.0], [94.2, 2439.0], [94.3, 2448.0], [94.4, 2448.0], [94.5, 2491.0], [94.6, 2491.0], [94.7, 2506.0], [94.8, 2506.0], [94.9, 2555.0], [95.0, 2555.0], [95.1, 2637.0], [95.2, 2637.0], [95.3, 2694.0], [95.4, 2694.0], [95.5, 2743.0], [95.6, 2743.0], [95.7, 2821.0], [95.8, 2821.0], [95.9, 2868.0], [96.0, 2868.0], [96.1, 2899.0], [96.2, 2899.0], [96.3, 2936.0], [96.4, 2936.0], [96.5, 3039.0], [96.6, 3039.0], [96.7, 3118.0], [96.8, 3118.0], [96.9, 3211.0], [97.0, 3211.0], [97.1, 3319.0], [97.2, 3319.0], [97.3, 3357.0], [97.4, 3357.0], [97.5, 3471.0], [97.6, 3471.0], [97.7, 3505.0], [97.8, 3505.0], [97.9, 3524.0], [98.0, 3524.0], [98.1, 3593.0], [98.2, 3593.0], [98.3, 3799.0], [98.4, 3799.0], [98.5, 3942.0], [98.6, 3942.0], [98.7, 4027.0], [98.8, 4027.0], [98.9, 4030.0], [99.0, 4030.0], [99.1, 4208.0], [99.2, 4208.0], [99.3, 4642.0], [99.4, 4642.0], [99.5, 4875.0], [99.6, 4875.0], [99.7, 4977.0], [99.8, 4977.0], [99.9, 5358.0], [100.0, 5358.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 61.0, "series": [{"data": [[600.0, 28.0], [700.0, 24.0], [800.0, 28.0], [900.0, 23.0], [1000.0, 24.0], [1100.0, 15.0], [1200.0, 16.0], [1300.0, 19.0], [1400.0, 15.0], [1500.0, 12.0], [100.0, 44.0], [1600.0, 5.0], [1700.0, 6.0], [1800.0, 8.0], [1900.0, 7.0], [2000.0, 8.0], [2100.0, 10.0], [2300.0, 8.0], [2200.0, 9.0], [2400.0, 4.0], [2500.0, 2.0], [2600.0, 2.0], [2800.0, 3.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 61.0], [3200.0, 1.0], [3300.0, 2.0], [3400.0, 1.0], [3500.0, 3.0], [3700.0, 1.0], [3900.0, 1.0], [4000.0, 2.0], [4200.0, 1.0], [4600.0, 1.0], [300.0, 45.0], [4800.0, 1.0], [4900.0, 1.0], [5300.0, 1.0], [400.0, 31.0], [500.0, 23.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 210.0, "series": [{"data": [[0.0, 179.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 210.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 102.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 9.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.375000000000002, "minX": 1.76605146E12, "maxY": 38.021739130434824, "series": [{"data": [[1.76605152E12, 9.375000000000002], [1.76605146E12, 38.021739130434824]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76605152E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 192.0, "minX": 1.0, "maxY": 2731.5, "series": [{"data": [[32.0, 1199.6], [33.0, 882.4285714285714], [2.0, 1484.0], [34.0, 821.375], [35.0, 862.9285714285714], [36.0, 992.8666666666667], [37.0, 841.047619047619], [38.0, 675.7142857142858], [39.0, 966.086956521739], [40.0, 927.1333333333332], [41.0, 991.9642857142856], [42.0, 883.6153846153845], [43.0, 914.2499999999999], [44.0, 821.6060606060607], [45.0, 873.2285714285713], [46.0, 755.4285714285714], [47.0, 957.3529411764707], [48.0, 834.0], [3.0, 1232.0], [5.0, 914.0], [6.0, 1160.8], [7.0, 1671.0], [8.0, 1564.8], [9.0, 1060.0], [10.0, 970.0], [11.0, 942.5], [12.0, 2448.0], [13.0, 1012.0], [14.0, 192.0], [15.0, 1323.0], [16.0, 288.0], [1.0, 2694.0], [17.0, 561.0], [18.0, 850.3636363636364], [19.0, 193.5], [20.0, 358.0], [21.0, 1473.8333333333335], [22.0, 1432.6666666666665], [23.0, 2731.5], [24.0, 1468.4999999999998], [25.0, 1192.5], [26.0, 1001.125], [27.0, 1879.7142857142858], [28.0, 1002.2], [29.0, 1114.8], [30.0, 1161.642857142857], [31.0, 1386.4545454545455]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[35.73000000000003, 1006.7819999999995]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 48.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 78.0, "minX": 1.76605146E12, "maxY": 3732.233333333333, "series": [{"data": [[1.76605152E12, 327.3333333333333], [1.76605146E12, 3732.233333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76605152E12, 78.0], [1.76605146E12, 897.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76605152E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 995.1782608695645, "minX": 1.76605146E12, "maxY": 1140.2249999999997, "series": [{"data": [[1.76605152E12, 1140.2249999999997], [1.76605146E12, 995.1782608695645]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76605152E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 994.7195652173912, "minX": 1.76605146E12, "maxY": 1140.1750000000002, "series": [{"data": [[1.76605152E12, 1140.1750000000002], [1.76605146E12, 994.7195652173912]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76605152E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.76605146E12, "maxY": 138.54130434782616, "series": [{"data": [[1.76605152E12, 0.0], [1.76605146E12, 138.54130434782616]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76605152E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 177.0, "minX": 1.76605146E12, "maxY": 5358.0, "series": [{"data": [[1.76605152E12, 3118.0], [1.76605146E12, 5358.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76605152E12, 2618.1], [1.76605146E12, 2117.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76605152E12, 3118.0], [1.76605146E12, 4115.440000000003]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76605152E12, 2888.749999999999], [1.76605146E12, 2496.9999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76605152E12, 192.0], [1.76605146E12, 177.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76605152E12, 948.0], [1.76605146E12, 759.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76605152E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 428.0, "minX": 1.0, "maxY": 4642.0, "series": [{"data": [[32.0, 744.0], [2.0, 2122.0], [35.0, 787.5], [9.0, 928.5], [39.0, 595.0], [41.0, 857.0], [43.0, 701.5], [44.0, 686.0], [12.0, 2351.5], [48.0, 712.0], [53.0, 868.0], [55.0, 681.0], [14.0, 699.0], [4.0, 1137.5], [1.0, 1451.0], [27.0, 776.0], [31.0, 1016.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 4642.0], [35.0, 428.0], [43.0, 449.0], [48.0, 843.5], [53.0, 687.0], [55.0, 1249.0], [27.0, 608.0], [31.0, 1818.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 428.0, "minX": 1.0, "maxY": 4641.0, "series": [{"data": [[32.0, 743.0], [2.0, 2122.0], [35.0, 787.0], [9.0, 928.5], [39.0, 594.0], [41.0, 856.0], [43.0, 701.0], [44.0, 686.0], [12.0, 2342.5], [48.0, 712.0], [53.0, 868.0], [55.0, 681.0], [14.0, 699.0], [4.0, 1137.5], [1.0, 1451.0], [27.0, 776.0], [31.0, 1016.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 4641.0], [35.0, 428.0], [43.0, 449.0], [48.0, 843.0], [53.0, 687.0], [55.0, 1249.0], [27.0, 607.0], [31.0, 1818.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.76605146E12, "maxY": 7.966666666666667, "series": [{"data": [[1.76605152E12, 0.36666666666666664], [1.76605146E12, 7.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76605152E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.15, "minX": 1.76605146E12, "maxY": 7.516666666666667, "series": [{"data": [[1.76605152E12, 0.6666666666666666], [1.76605146E12, 7.516666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76605146E12, 0.15]], "isOverall": false, "label": "502", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76605152E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.15, "minX": 1.76605146E12, "maxY": 7.516666666666667, "series": [{"data": [[1.76605152E12, 0.6666666666666666], [1.76605146E12, 7.516666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.76605146E12, 0.15]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76605152E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.15, "minX": 1.76605146E12, "maxY": 7.516666666666667, "series": [{"data": [[1.76605152E12, 0.6666666666666666], [1.76605146E12, 7.516666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76605146E12, 0.15]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76605152E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

