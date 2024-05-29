import BDNI from '../media/heroImages/1998_Jakarta_BDNI.png'
import BeijingBOC from '../media/heroImages/2001_Beijing_BOC.png'
import X3 from '../media/heroImages/2003_Shanghai_X3_2.png'
import AlBurj from '../media/heroImages/2004_Dubai_AlBurj.png'
import Suzhou from '../media/heroImages/2006_Suzhou_Museum.png'
import LeonMuseum from '../media/heroImages/2006_Leon_Library.png'
import IFC from '../media/heroImages/2008_Shenyang_IFC.png'
import UCLA from '../media/heroImages/2008_LosAngeles_UCLA.png'
import ChineseEmbassy from '../media/heroImages/2008_Washington_DC_Embassy.png'
import MacaoScience from '../media/heroImages/2009_Macau_ScienceCenter.png'
import Centurion from '../media/heroImages/2010_NewYork_Centurion.png'
import BMW from '../media/heroImages/2012_Beijing_BMW.png'
import ParkHyatt from '../media/heroImages/2012_Beijing_ParkHyatt.png'
import BOCFlushing from '../media/heroImages/2014_Flushing_NY_BOC.png'
import SixDynasties from '../media/heroImages/2015_Nanjing_GrandMansionHotel.png'
import BOCHongKong from '../media/heroImages/2017_HongKong_BOC.png'
import YuLong from '../media/heroImages/2020_Chifeng_YuLong.png'
import ChateauLynchBage from '../media/heroImages/2020_Paulliac_Chateau.png'
import Faria from '../media/heroImages/2021_SaoPaulo_FariaLima.png'
import Yonge from '../media/heroImages/2022_Toronto_Yonge.png'
import Changsha from '../media/heroImages/2023_Changsa_SANY.png'
import FuzhouHotel from '../media/heroImages/2024_Fuzhou_GuanglufangHotel.png'
import BOCNanning from '../media/heroImages/2024_Nanning_BOC.png'
import FTZ from '../media/heroImages/2024_Shanghai_FTZ.png'
import FlushingCreek from '../media/heroImages/2024_Flushing_NY_Creek.png'
import BalaiPameran from '../media/heroImages/2019_Bandar_BalaiPameran.png'
import dongFang from '../media/heroImages/2020_Dongfang_CityCoastZone.png'
import GuanzhouBridge from '../media/heroImages/2022_Guangzhou_Bridge.png'
import NanhaiCultural from '../media/heroImages/2024_Guangzhou_CulturalCenter.png'
import DancingTheatre from '../media/heroImages/2010_Macao_Theatre.png'
import WarnerTower from '../media/heroImages/2024_WarnerTower.png'
import JianfuPalance from '../media/heroImages/2005_PalaceGarden.png'
import ChinaInstitute from '../media/heroImages/2024_NewYork_ChinaInstitute.png'

import {AlBurjData} from "./AlBurj/AlBurjProject";
import {BeijingBOCData} from "./BeijingBOC/BeijingBOCProject";
import {X32Data} from "./X32/X32Project";
import {BDNIData} from "./BDNI/BDNIProject";
import {SuzhouMuseumData} from "./SuzhouMuseum/SuzhouMuseumProject";
import {LibraryData} from "./LeonLibrary/LeonLibraryProject";
import {IFCData} from "./IFC/IFCProject";
import {UCLAData} from "./UCLA/UCLAProject";
import {EmbassyData} from "./Embassy/ChineseEmbassyProject";
import {ScienceCenterData} from "./ScienceCenter/ScienceCenterProject";
import {DancingTheatreData} from "./DancingTheatre/DancingTheatreProject";
import {CenturionData} from "./Centurion/CenturionProject";
import {BMWData} from "./BMW/BMWProject";
import {ParkHyattData} from "./ParkHyatt/ParkHyattProject";
import {FlushingBOCData} from "./FlushingBOC/FlushingBOCProject";
import {GrandMansionData} from "./GrandMansionHotel/GrandMansionProject";
import {HeritageData} from "./HeritageBOC/HeritageProject";
import {PameranData} from "./BalaiPameran/BalaiPameranProject";
import {YuLongData} from "./YuLong/YuLongProject";
import {ChateauData} from "./ChateauLynch/ChateauLynchBageProject";
import {CoastZoneData} from "./DongFang/DongFangProject";
import {FariaData} from "./Faria/FariaProject";
import {YongeData} from "./Yonge/YongeProject";
import {BridgeData} from "./GuangzhouBridge/GuangzhouBridgeProject";
import {SANYData} from "./SANY/SANYProject";
import {MandarinData} from "./GuanglufangHotel/MandarinHotelProject";
import {NanningBOCData} from "./NanningBOC/NanningBOCProject";
import {FTZData} from "./FTZ/FTZProject";
import {Creek} from "./FlushingCreek/CreekProject";
import {CulturalCenter} from "./CulturalCenter/NanhaiCulturalCenterProject";
import {WarnerData} from "./WarnerTower/WarnerTowerProject";
import {PalaceGardenData} from "./PalaceGarden/PalaceGardenProject";
import {ChinaInstituteProject} from "./ChinaInstitute/ChinaInstituteProject";

export const timelineItems = [
    {
        city: 'Jakarta', 
        country: 'Indonesia', 
        date: 'Suspended 1998', 
        year: 1998,
        title: 'Sentra Bank Degang Negara Indonesia', 
        image: BDNI, 
        type: 'Mixed Use', 
        size: '311,600m²', 
        client: 'P.T. Grand Paradise',
        data: BDNIData
    },
    {
        city: 'Beijing', 
        country: 'China', 
        date: '2001', 
        year: 2001,
        title: 'Bank of China, Head Office Building', 
        image: BeijingBOC, 
        type: 'Corporate', 
        size: '173,700m² /1,869,691 ft.²', 
        client: 'Beijing Bank of China Co., Ltd',
        data: BeijingBOCData
    },
    {
        city: 'Shanghai',
        country: 'China', 
        date: '2003',
        year: 2003,
        title: 'X3-2 Office Tower', 
        image: X3,
        type: 'Commercial',
        size: '96,000m²',
        client: 'Treasure Bay Oriental Development Management, Ltd.',
        data: X32Data
    },
    {
        city: 'Dubai', 
        country: 'United Arab Emirates', 
        date: '2004',
        year: 2004,
        title: 'Al Burj', 
        image: AlBurj,
        type: 'Hospitality', 
        size: '836,000 m²', 
        client: 'Nakheel Division of Dubai World',
        data: AlBurjData
    },
    {
        city: 'Suzhou',
        country: 'China', 
        date: '2006', 
        year: 2006,
        title: 'Suzhou Museum', 
        image: Suzhou,
        type: 'Cultural',
        size: '15,391m² / 165,667 ft²',
        client: 'Suzhou Municipal Administration of Culture, Radio & Television',
        data: SuzhouMuseumData
    },
    {
        city: 'Leon, Guanajuato',
        country: 'Mexico',
        date: '2006',
        year: 2006,
        title: 'Guanajuato State Library',
        image: LeonMuseum,
        type: 'Cultural',
        size: '11,262m² / 121,223ft.²',
        client: 'Fundación Cultural Guanajuato',
        data: LibraryData
    },
    {
        city: 'Shenyang',
        country: 'China',
        date: '2008', 
        year: 2008,
        title: 'International Financial Center', 
        image: IFC,
        type: 'Commercial',
        size: '245,000m²',
        client: 'Henderson Land Development Co. Ltd.',
        data: IFCData
    },
    {
        city: 'Los Angeles, CA',
        country: 'USA',
        date: '2008',
        year: 2008,
        title: 'Ronald Reagan UCLA Medical Center',
        image: UCLA,
        type: 'Healthcare',
        size: '320,039m² / 3444871ft²',
        client: 'Regents of the University of California',
        data: UCLAData
    },
    {
        city: 'Washington. D.C', 
        country: 'USA', 
        date: '2008',
        year: 2008,
        title: 'Embassy of the People\'s Republic of China', 
        image: ChineseEmbassy,
        type: 'Government',
        size: '24,829m² / 267,257ft²',
        client: 'Department of Administration Foreign Ministry Of the People’s Republic of China',
        data: EmbassyData
    },
    {
        city: 'Macau SAR', 
        country: 'China',
        date: '2010',
        year: 2010,
        title: 'House of Dancing Water',
        image: DancingTheatre,
        type: 'Cultural',
        size: '26,000 m² / 279,861 ft²',
        client: 'Melco Crown Entertainment, ltd',
        data: DancingTheatreData
    },
    {
        city: 'Macau SAR',
        country: 'China', 
        date: '2009',
        year: 2009,
        title: 'Macao Science Center',
        image: MacaoScience,
        type: 'Cultural',
        size: '23,000m² /250,000ft²',
        client: 'Macao Foundation',
        data: ScienceCenterData
    },
    {
        city: 'New York, NY', 
        country: 'USA', 
        date: '2010', 
        year: 2010,
        title: 'The Centurion', 
        image: Centurion, 
        type: 'Residential', 
        size: '1,193,962ft²', 
        client: 'Stillman Development International LLC / Antonio Development',
        data: CenturionData
    },
    {
        city: 'Beijing', 
        country: 'China', 
        date: '2012', 
        year: 2012,
        title: 'Xingdebao BMW 5S Dealership', 
        image: BMW, type: 'Corporate', 
        size: '288,473 SQ.FT/26,800 SQ.M', 
        client: 'Beijing Xingdebao Automobile Co., Ltd.',
        data: BMWData
    },
    {
        city: 'Beijing',
        country: 'China', 
        date: '2012', 
        year: 2012,
        title: 'Park Hyatt Penthouse',
        image: ParkHyatt, 
        type: 'Hospitality',
        size: '350m² / 1150ft.²',
        client: 'Confidential',
        data: ParkHyattData
    },
    {
        city: 'Flushing, Queens, NY', 
        country: 'USA',
        date: '2014', 
        year: 2014,
        title: 'Bank of China', 
        image: BOCFlushing, 
        type: 'Commercial', 
        size: '1,400m² / 15,000ft²', 
        client: 'Bank of China Co., Ltd',
        data: FlushingBOCData
    },
    {
        city: 'Nanjing', 
        country: 'China',
        date: '2015',
        year: 2015,
        title: 'Six Dynasties Grand Mansion Hotel', 
        image: SixDynasties,
        type: 'Hospitality',
        size: 'Museum & hotel complex combined: 30,529m² / 328,611ft²',
        client: 'Starwood Hotels and Resorts',
        data: GrandMansionData
    },
    {
        city: 'Hong Kong',
        country: 'China', 
        date: '2017', 
        year: 2017,
        title: 'Bank of China Heritage Building', 
        image: BOCHongKong, 
        type: 'Commercial', 
        size: 'Approx. 2,500m² / 26,910ft.²', 
        client: 'Bank of China Co., Ltd',
        data: HeritageData
    },
    {
        city: 'Chifeng', 
        country: 'China',
        date: '2020',
        year: 2020,
        title: 'Yu Long State Guest Hotel',
        image: YuLong, 
        type: 'Hospitality',
        size: '65,000m² / 699,654 ft.²',
        client: 'Xing Ye Group',
        data: YuLongData
    },
    {
        city: 'Paulliac, Bordeaux', 
        country: 'France', 
        date: '2020', 
        year: 2020,
        title: 'Château Lynch-Bages Winery',
        image: ChateauLynchBage, 
        type: 'Cultural',
        size: '14,000m² / 150,700ft²',
        client: 'Château Lynch-Bages',
        data: ChateauData
    },
    {
        city: 'Sao Paulo', 
        country: 'Brazil', 
        date: '2021', 
        year: 2021,
        title: 'Faria Lima B32', 
        image: Faria, 
        type: 'Commercial',
        size: '62,155m² / 669,030 ft²',
        client: 'Faria Lima Prime Properties Development',
        data: FariaData
    },
    {
        city: 'Toronto', 
        country: 'Canada',
        date: '2022', 
        year: 2022,
        title: '2221 Yonge Street',
        image: Yonge,
        type: 'Residential',
        size: '40,413m² / 435,002ft²',
        client: 'Tower Hill Development Corp.',
        data: YongeData
    },
    {
        city: 'Changsha, Hunan', 
        country: 'China',
        date: '2023',
        year: 2023,
        title: 'Sanxiang Bank Mixed Use Development',
        image: Changsha,
        type: 'Mixed Use',
        size: '106,138 SQ. M/1,142,260 SQ. FT',
        client: 'SANY Group',
        data: SANYData
    },
    {
        city: 'Fuzhou',
        country: 'China',
        date: 'Expected 2024',
        year: 2024,
        title: 'Three Lanes and Seven Alleys Guanglufang Hotel',
        image: FuzhouHotel,
        type: 'Hospitality & Residential',
        size: '3,194.61m²',
        client: 'Fuzhou Alleyway Hotel Co., Ltd',
        data: MandarinData
    },
    {
        city: 'Nanning', 
        country: 'China', 
        date: 'Expected 2024', 
        year: 2024,
        title: 'Bank of China Towers, Guangxi Branch', 
        image: BOCNanning, 
        type: 'Commercial', 
        size: '1,000,000ft.²',
        client: 'Bank of China Co., Ltd',
        data: NanningBOCData
    },
    {
        city: 'Shanghai',
        country: 'China',
        date: 'Expected 2024',
        year: 2024,
        title: 'Shanghai FTZ',
        image: FTZ, 
        type: 'Commercial',
        size: '190,000 m.² / 2,044,000 ft.²',
        client: 'Bank of China Co., Ltd',
        data: FTZData
    },
    {
        city: 'Flushing, Queens, NY',
        country: 'USA',
        date: 'Current',
        year: 2024,
        title: 'Flushing Creek',
        image: FlushingCreek,
        type: 'Mixed Use',
        size: '650,261ft²',
        client: 'Young Nian Group',
        data: Creek
    },
    {
        city: 'Bandar Seri Begawan',
        country: 'Brunei', 
        date: '2019',
        year: 2019,
        title: 'Balai Pameran Islam Sultan',
        image: BalaiPameran,
        type: 'Museum & Research Center',
        size: '15,000m² / 161,459ft²',
        client: 'His Majesty, Sultan Haji Hassanal Bolkiah',
        data: PameranData
    },
    {
        city: 'Dongfang, Hainan',
        country: 'China',
        date: '2020',
        year: 2020,
        title: 'Dongfang City Coast Zone Urban Design',
        image: dongFang,
        type: 'Master Plan and Mixed-Use',
        size: '9.5 km²',
        client: 'Dongfang Housing and Urban Rural Construction Bureau',
        data: CoastZoneData
    },
    {
        city: 'Guangzhou',
        country: 'China',
        date: '2022',
        year: 2022,
        title: 'Guangzhou Pedestrian Bridge',
        image: GuanzhouBridge,
        type: 'Governmental',
        size: '615 m²',
        client: 'City of Guangzhou',
        data: BridgeData
    },
    {
        city: 'Guangzhou',
        country: 'China',
        date: 'Expected 2024',
        year: 2024,
        title: 'Nanhai Cultural Center',
        image: NanhaiCultural,
        type: 'Cultural and Governmental',
        size: '130,000m²',
        client: 'Land Urban Construction and Water Conservancy Buereau of Nanhai District',
        data: CulturalCenter
    },
    {
        city: 'New York City',
        country: 'United States',
        date: '2011',
        year: 2011,
        title: 'Warner Tower',
        image: WarnerTower,
        type: 'Mixed Use',
        size: '260,000ft²',
        client: 'Confidential',
        data: WarnerData
    },
    {
        city: 'Forbidden City, Beijing',
        country: 'China',
        date: '2005',
        year: 2005,
        title: 'Jianfu Palace Museum',
        image: JianfuPalance,
        type: 'Cultural',
        size: '18,000ft²',
        client: 'China Heritage Fund',
        data: PalaceGardenData
    },
    {
        city: 'New York City',
        country: 'United States',
        date: '2024',
        year: 2024,
        title: 'China Institute',
        image: ChinaInstitute,
        type: 'Cultural',
        size: '30,000ft² / 2,787m² ',
        client: 'The China Institute',
        data: ChinaInstituteProject
    }
]