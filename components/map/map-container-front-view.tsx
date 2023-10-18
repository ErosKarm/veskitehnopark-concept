import { Warehouse } from "@/lib/types";
import { cn } from "@/lib/utils";
import { MouseEvent } from "react";

interface MapContainerFrontViewProps {
  showToolTip: (e: MouseEvent) => void;
  onMouseLeave: (e: MouseEvent) => void;
  warehouses: Warehouse[] | null;
}

const MapContainerFrontView = ({
  showToolTip,
  onMouseLeave,
  warehouses,
}: MapContainerFrontViewProps) => {
  return (
    <>
      <polyline
        data-id="A"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="1417.9545023980115,697.7556 1381.1886037409095,679.1359777574365 1376.4512604829756,679.048010455183 1371.7397338015746,677.6098169971275 1372.943772965682,673.6767533240588 1329.8300565154645,650.4124966336994 1325.2137373674082,652.4541424693878 1320.534092319781,649.7442863358506 1320.9870371617822,646.4580154773755 1303.8719999999998,638.6437076733155 1321.4401178685969,496.1070132940354 1592.7487745737867,435.6288 1865.5104,503.1572534841389 1824.782957403223,645.9997268445914"
      ></polyline>
      <polyline
        data-id="B"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="1304.4434979600646,639.1332 1279.2368918177685,624.7529090813515 1275.366407827482,625.5416865906511 1272.1663247300376,624.3032820840407 1272.1317454615385,620.6408566452697 1237.1147769351753,602.0500317574174 1233.8537570133237,603.0352230473412 1229.1841436162072,601.5439407280041 1229.3397091752527,598.776284139554 1172.7552,569.8584503083038 1182.297848901088,442.83058207755715 1440.7799107689702,400.1724 1590.2208,437.4067618164427 1321.804021527234,496.1493229782483 "
      ></polyline>
      <polyline
        data-id="C"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="1172.2705363313828,569.1200207118652 1138.8858538926083,577.5377093341515 1138.4787956884484,581.2147181178152 1133.0775715066186,582.0300734837072 1129.359220908846,578.4006502340801 1096.5117929159924,588.2220000000001 1079.9072465470722,575.6334936882714 1071.9389461445069,575.0981588515432 1074.3552285231183,502.8806619959622 1013.8752,476.8143575692735 1016.0565133704152,436.5058889886392 1278.144260943514,392.9808705078355 1195.1243948242438,367.66328215631 1262.5057357454114,357.08040000000005 1357.413460226238,378.97194592653557 1441.6512,400.16867279916033 1181.067865176959,442.5283634918528 "
      ></polyline>

      <polyline
        data-id="D"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="900.4386261963,636.8548067291954 896.1974128178263,533.108519366455 833.1264000000001,488.31312509947054 983.6212610503783,462.0456 1075.1232,502.4380160577832 1074.075505972227,574.6190606707349 1056.1753486755886,578.663831105859 1052.273400772106,598.4306029904558 1025.2979881384103,605.281052780461 1025.2450167289892,609.800431784849 1019.8705454278769,610.483875030689 1017.4714738811325,607.4870885255698 962.908386307672,621.9410007321951 962.640606449678,624.8583985447777 957.4598931660357,625.4610515299916 955.1413487110779,623.0722828626826 908.6442840148532,635.4946740610633 908.1944275347577,639.2011432240379 902.6707767485788,639.9972 "
      ></polyline>

      <polyline
        data-id="E"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="773.5080364998581,668.8905530721428 765.0811702831217,556.8588550566751 711.1872,508.94143520847166 834.0736399647778,487.836 897.3713432781472,533.0459901133726 901.9584,636.4382442008197 857.1310054588769,647.4338321301539 849.4690085580089,639.6892036478389 826.7290402728556,643.6480800143432 824.3542538185053,656.2577843036887 782.7822338879329,666.3904819617212 782.5384518995569,670.4093678273044 776.7238383265442,671.7276 "
      ></polyline>

      <polyline
        data-id="F"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="627.2424364998582,709.7004000000001 608.8123702831218,590.186352556672 571.6992,534.0726684752487 711.5008399647777,509.23080000000004 765.3521432781471,557.1075234721334 774.2592000000001,669.9370851194994 697.1466583523427,688.5162410684131 696.2690074533941,693.267187037471 688.724431809889,694.5234838031179 686.9538064653827,689.5944324452919 635.7794416806923,703.2224941719231 635.0324117889216,708.4705213699558 "
      ></polyline>

      <polyline
        data-id="G"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        onClick={() => console.log("g")}
        points="458.4936364998582,753.1704 433.6891702831217,624.3899525566719 416.3136,560.7918684752485 572.8768399647777,533.6279999999999 609.4289432781472,588.8163234721331 627.0912000000001,706.8190851194993 535.148207690443,729.5109915747281 535.9479186214897,733.5346704429875 528.468104206624,735.0829238257357 527.1088189036819,730.4962327877612 464.79586908430474,745.7164504530989 465.672824865551,751.2113435293683 "
      ></polyline>

      <polyline
        data-id="H"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="260.0235928730482,800.4528 224.736,665.7539525566716 238.6372270713569,591.0534684752486 415.22571428755646,561.1572 432.1848696593695,624.8621853067052 456.192,746.811485119499 348.3551272612452,772.5538726501063 349.34168262085865,778.0866736176202 341.42222638461675,780.2259247389961 340.3539525628317,774.5526152266572 267.8944820761031,793.3586395201778 268.3960863570839,798.2021020598411 "
      ></polyline>

      <polyline
        data-id="I"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="93.76024551716553,836.4384 46.1184,702.7525481963382 63.48057848760874,668.3820636656884 229.91314917536263,633.1392 224.85978159091633,664.1285138675054 260.25600000000003,795.9131404966103 "
      ></polyline>

      <polyline
        data-id="J"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="63.647999999999996,668.5956 80.40940439461636,633.0984350708585 237.2352,603.9144 231.9417513071834,633.0599853442035 "
      ></polyline>

      <polyline
        data-id="K"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="78.24000000000001,633.69 95.73093492929604,598.9055889891354 241.0752,572.2164 236.16576408109748,603.8460090661755 "
      ></polyline>

      <polyline
        data-id="L"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="94.6368,599.1192 114.98835982751535,555.4246590603806 247.68,535.68 242.25222512043277,572.8393173965746 "
      ></polyline>

      <polyline
        data-id="L"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="94.6368,599.1192 114.98835982751535,555.4246590603806 247.68,535.68 242.25222512043277,572.8393173965746 "
      ></polyline>

      <polyline
        data-id="M"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="247.87837108326033,535.3304343022577 327.3408,524.5992 324.33278355436994,577.448829714784 239.04,591.7212 "
      ></polyline>

      <polyline
        data-id="N"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="327.002284984167,524.4548089901755 404.3587277316785,513.0216 416.7167999999999,561.2970331912464 324.21119999999996,576.9252 "
      ></polyline>

      <polyline
        data-id="O"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="404.832,513.0499604113811 477.3942796138261,501.97319999999996 493.8432,548.1100362235163 416.4800263102683,561.4272 "
      ></polyline>

      <polyline
        data-id="P"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="476.2944,502.35794926017894 545.1120255104638,490.9248 572.6016,534.5669104644451 492.91548546508596,548.5968 "
      ></polyline>

      <polyline
        data-id="Q"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="545.2031999999999,490.95323150979925 611.1790817277852,480.94559999999996 641.8559999999999,522.2657916423235 572.1737722731446,534.6972 "
      ></polyline>

      <polyline
        data-id="R"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="611.0016,480.9739030738611 672.6762059552648,471.67920000000004 712.3008000000001,509.97537232379716 642.1963721039473,522.7524000000001 "
      ></polyline>

      <polyline
        data-id="S"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="671.2128,471.70752958196834 731.4664465983163,462.0564 775.008,498.9269522980091 711.3552810784403,510.462 "
      ></polyline>

      <polyline
        data-id="T"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="731.1936000000001,463.12165632425655 790.0262684672828,454.5396 833.9136000000001,488.91542258706465 774.5617934417608,499.0248 "
      ></polyline>

      <polyline
        data-id="U"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="788.4479999999999,454.60040756358075 840.5219657553024,446.73119999999994 891.1871999999998,478.61221246651286 832.891548430804,489.0779999999999 "
      ></polyline>

      <polyline
        data-id="V"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="840.4608000000001,446.7595868536471 888.9825315660523,439.2468 943.9104000000001,469.34576893576104 890.9718932365923,478.7424 "
      ></polyline>

      <polyline
        data-id="W"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="889.2864000000001,439.27518903345896 939.5941222464328,432.1188 939.2773915403,440.5074407048162 983.8272000000001,462.5739545387173 943.3500108465876,469.8324 "
      ></polyline>

      <polyline
        data-id="X"
        onMouseEnter={(e) => showToolTip(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        points="1014.5584163221598,477.10080000000005 938.890693758402,441.07594975442385 938.5536000000001,401.99168523868747 1267.3765485237286,357.40440000000007 1441.5168,400.1201563363491 1347.115595239423,416.1344782066215 1278.3761341602954,393.2033953808905 1016.4674944102304,437.0491748053334 "
      ></polyline>
    </>
  );
};

export default MapContainerFrontView;
