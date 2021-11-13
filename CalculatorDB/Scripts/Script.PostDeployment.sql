/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

if not exists (SELECT * FROM dbo.Calculations)
begin
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 3721.85023, '+', 2712.54077, 6434.391, '2021-10-12 20:01:51');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 9876.07871, '+', 9667.45673, 19543.53544, '2021-01-13 04:09:28');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 4424.02042, '+', 9944.36344, 14368.38386, '2021-06-30 01:53:31');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 1254.95081, '+', 8219.37771, 9474.32852, '2021-01-24 12:39:36');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 4894.49704, '+', 7928.29448, 12822.79152, '2021-09-27 21:09:24');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 1787.87884, '+', 7664.10244, 9451.98128, '2021-01-21 16:38:56');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 3746.36051, '+', 7634.4262, 11380.78671, '2020-11-20 08:31:31');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 6039.23979, '+', 2592.24038, 8631.48017, '2021-04-02 07:54:14');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 4743.10907, '+', 6460.68493, 11203.794, '2021-01-01 07:43:35');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 3987.84536, '+', 6090.43648, 10078.28184, '2021-09-11 11:07:11');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 2106.98063, '+', 8584.56277, 10691.5434, '2021-03-29 07:52:03');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 7449.40648, '+', 4313.0172, 11762.42368, '2021-04-01 17:30:21');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 7236.26643, '+', 4034.93552, 11271.20195, '2021-10-31 03:57:13');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 312.11663, '+', 839.92381, 1152.04044, '2020-12-13 10:23:18');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 1279.28396, '+', 2481.89889, 3761.18285, '2021-06-22 22:24:05');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 3162.11411, '+', 4385.64381, 7547.75792, '2021-06-14 10:49:11');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 9163.70271, '+', 2781.57555, 11945.27826, '2020-11-15 21:32:15');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 5931.35136, '+', 2160.22041, 8091.57177, '2021-02-08 05:57:28');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 9904.80172, '+', 2294.56311, 12199.36483, '2021-06-27 19:06:06');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 6606.55997, '+', 6537.73617, 13144.29614, '2021-09-30 02:56:51');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 9883.72508, '+', 3397.65292, 13281.378, '2021-09-09 15:07:14');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 3100.40902, '+', 8822.32844, 11922.73746, '2020-12-02 23:25:04');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 7122.2283, '+', 8044.98888, 15167.21718, '2021-07-12 13:08:21');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 4892.77995, '+', 1250.86935, 6143.6493, '2021-05-15 11:00:07');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 3222.6105, '+', 9484.62069, 12707.23119, '2020-12-20 05:23:57');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 8683.46582, '+', 8660.87234, 17344.33816, '2020-11-13 16:36:39');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 8787.21546, '+', 421.35757, 9208.57303, '2021-04-09 16:21:01');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 9340.17917, '+', 4369.56785, 13709.74702, '2020-12-17 22:57:50');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 821.39236, '+', 2934.85327, 3756.24563, '2021-03-13 13:25:28');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 2184.86384, '+', 3172.52206, 5357.3859, '2021-09-29 09:41:46');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 4777.47086, '+', 2673.20299, 7450.67385, '2021-01-09 19:21:30');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 6239.57955, '+', 5080.58466, 11320.16421, '2021-05-13 17:39:58');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 4987.13012, '+', 6827.10082, 11814.23094, '2021-01-07 11:54:11');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 7184.38031, '+', 778.80469, 7963.185, '2021-08-03 14:52:05');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 2878.13035, '+', 9202.43255, 12080.5629, '2021-11-11 04:03:01');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 361.13863, '+', 426.13019, 787.26882, '2021-06-26 16:18:12');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 1139.32615, '+', 9899.9057, 11039.23185, '2021-05-21 21:54:59');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 9435.98465, '+', 9561.42386, 18997.40851, '2020-11-19 18:57:47');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 8694.46729, '+', 2640.15244, 11334.61973, '2021-03-29 01:42:56');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 2211.92851, '+', 1189.6931, 3401.62161, '2021-01-17 12:32:28');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 1739.96403, '+', 7228.70841, 8968.67244, '2021-08-12 19:20:00');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 4455.20263, '+', 9853.7199, 14308.92253, '2021-06-06 00:54:35');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 6049.81342, '+', 9817.24623, 15867.05965, '2021-08-03 01:10:41');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 3329.60256, '+', 3200.64259, 6530.24515, '2021-01-12 07:24:01');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 1037.23948, '+', 8540.20004, 9577.43952, '2021-06-18 11:14:36');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 6799.38458, '+', 4711.88079, 11511.26537, '2020-12-13 23:04:17');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 9021.39635, '+', 2467.23056, 11488.62691, '2021-02-11 18:47:15');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 5108.69069, '+', 4907.40757, 10016.09826, '2021-05-02 14:24:10');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 537.94366, '+', 8736.45237, 9274.39603, '2020-11-29 08:11:40');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 5330.95715, '+', 6508.03674, 11838.99389, '2021-01-27 09:09:08');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 8848.07139, '+', 1834.95564, 10683.02703, '2021-09-21 14:28:47');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 161.90789, '+', 4109.99439, 4271.90228, '2021-04-16 22:42:13');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 9307.16534, '+', 8400.16163, 17707.32697, '2021-07-06 00:43:21');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 4765.82037, '+', 8298.19983, 13064.0202, '2021-01-16 22:32:40');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 6122.29976, '+', 3560.68406, 9682.98382, '2021-02-16 00:51:16');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 4316.31836, '+', 3360.92083, 7677.23919, '2021-01-24 08:38:21');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 2663.79063, '+', 7690.72442, 10354.51505, '2021-02-19 17:19:18');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 6407.4865, '+', 6812.36773, 13219.85423, '2021-10-11 04:17:14');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 6329.87023, '+', 2987.87085, 9317.74108, '2021-04-19 19:46:27');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 5928.54437, '+', 5529.29279, 11457.83716, '2021-01-25 00:03:17');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 3077.43981, '+', 3388.52853, 6465.96834, '2021-03-22 19:34:24');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 3578.47802, '+', 5371.58654, 8950.06456, '2021-04-18 14:49:52');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 2150.28145, '+', 9207.67812, 11357.95957, '2021-04-28 16:56:31');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 9203.8424, '+', 5905.98748, 15109.82988, '2021-01-06 01:21:16');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 4232.68006, '+', 9954.23206, 14186.91212, '2021-07-31 02:14:09');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 8193.26095, '+', 8761.35617, 16954.61712, '2021-06-11 19:01:49');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 5820.61783, '+', 9981.32372, 15801.94155, '2021-09-09 07:32:08');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 7416.41669, '+', 3303.1545, 10719.57119, '2021-05-14 10:54:18');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 5789.52542, '+', 6589.74946, 12379.27488, '2021-04-02 13:48:07');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 4891.51933, '+', 2813.35894, 7704.87827, '2020-12-02 04:41:57');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 3693.15035, '+', 1052.55132, 4745.70167, '2021-10-24 10:50:13');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 8678.76085, '+', 8965.80622, 17644.56707, '2020-12-11 07:44:30');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 4189.26461, '+', 9336.63687, 13525.90148, '2021-07-02 04:10:54');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 2384.65148, '+', 4045.44271, 6430.09419, '2021-09-17 07:38:35');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 7031.52732, '+', 5769.55739, 12801.08471, '2021-05-19 13:43:29');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 9797.87457, '+', 9669.94189, 19467.81646, '2021-05-06 05:26:17');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 5879.22276, '+', 6275.85472, 12155.07748, '2021-08-06 06:11:42');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 1391.31437, '+', 8356.64531, 9747.95968, '2021-09-03 15:14:34');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 5637.42546, '+', 4983.11742, 10620.54288, '2020-11-28 21:10:09');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 4964.87349, '+', 5517.00161, 10481.8751, '2021-01-07 04:19:27');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 9345.52196, '+', 6419.83648, 15765.35844, '2020-12-07 19:38:20');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 6858.02195, '+', 1851.23932, 8709.26127, '2021-02-06 22:50:32');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 2045.65145, '+', 2933.80627, 4979.45772, '2021-01-13 23:49:06');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 2441.18085, '+', 6146.08746, 8587.26831, '2021-06-28 04:47:59');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 6327.0444, '+', 5363.64008, 11690.68448, '2021-03-31 07:40:23');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 9466.96416, '+', 2475.75049, 11942.71465, '2021-11-02 16:55:57');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 7128.23916, '+', 9787.17652, 16915.41568, '2021-03-30 19:37:29');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 7743.27097, '+', 4027.34524, 11770.61621, '2021-01-14 20:12:43');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 4904.34109, '+', 8987.24305, 13891.58414, '2021-04-24 08:03:33');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 3922.15082, '+', 1757.35168, 5679.5025, '2020-11-14 21:17:29');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 412.25571, '+', 8798.1278, 9210.38351, '2021-07-11 23:08:34');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 6028.57815, '+', 367.2293, 6395.80745, '2021-02-25 22:48:35');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 7779.46404, '+', 4840.84123, 12620.30527, '2021-06-06 04:04:32');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (3, 5118.48603, '+', 3306.91253, 8425.39856, '2021-03-03 15:31:52');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 877.49131, '+', 6298.7476, 7176.23891, '2020-11-30 15:15:02');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 6013.07583, '+', 6962.18216, 12975.25799, '2021-05-30 07:16:28');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (2, 2809.7074, '+', 7811.75184, 10621.45924, '2021-06-07 22:46:31');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 7310.77972, '+', 5573.56641, 12884.34613, '2021-05-13 00:50:00');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (1, 5162.89147, '+', 7198.80947, 12361.70094, '2020-12-01 07:29:17');
    insert into dbo.Calculations (UserId, FirstOperand, Operator, SecondOperand, Answer, Date) values (4, 1468.67034, '+', 7207.35071, 8676.02105, '2021-03-04 21:16:22');
end

if not exists (SELECT * FROM dbo.Users)
begin
    INSERT INTO dbo.Users(Username, FirstName, LastName)
    VALUES ('Guest', 'Guest', 'Guest'), ('Nate', 'Nathan', 'McCraw'), ('NickF', 'Nick', 'F'), ('NickS', 'Nick', 'S');
end