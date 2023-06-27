-- DROP SCHEMA bookstore;

CREATE SCHEMA bookstore;

-- DROP TYPE bookstore."accounts_role_enum";

CREATE TYPE bookstore."accounts_role_enum" AS ENUM (
	'CUSTOMER',
	'EMPLOYER',
	'ADMIN');

-- DROP SEQUENCE bookstore.accounts_id_seq;

CREATE SEQUENCE bookstore.accounts_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE bookstore.books_id_seq;

CREATE SEQUENCE bookstore.books_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE bookstore.categories_id_seq;

CREATE SEQUENCE bookstore.categories_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;-- bookstore.accounts definition

-- Drop table

-- DROP TABLE accounts;

CREATE TABLE bookstore.accounts (
	id serial4 NOT NULL,
	email varchar NOT NULL,
	"password" varchar NOT NULL,
	"fullName" varchar NOT NULL,
	phone varchar NOT NULL,
	address varchar NOT NULL,
	"role" bookstore."accounts_role_enum" NOT NULL DEFAULT 'CUSTOMER'::bookstore.accounts_role_enum,
	active bool NOT NULL DEFAULT true,
	CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY (id),
	CONSTRAINT "UQ_ee66de6cdc53993296d1ceb8aa0" UNIQUE (email)
);


-- bookstore.categories definition

-- Drop table

-- DROP TABLE categories;

CREATE TABLE bookstore.categories (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY (id),
	CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE (name)
);


-- bookstore.books definition

-- Drop table

-- DROP TABLE books;

CREATE TABLE bookstore.books (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	"imagePath" varchar NOT NULL,
	author varchar NOT NULL,
	description varchar NOT NULL,
	price int4 NOT NULL,
	"salePrice" int4 NOT NULL,
	"categoryId" int4 NOT NULL,
	"createdBy" varchar NOT NULL,
	"createdAt" timestamp NOT NULL DEFAULT now(),
	CONSTRAINT "CHK_a7b320b067afbc22fab94ac99d" CHECK ((price >= "salePrice")),
	CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY (id),
	CONSTRAINT "FK_7af212908c0d645d7644533534d" FOREIGN KEY ("createdBy") REFERENCES bookstore.accounts(email),
	CONSTRAINT "FK_a0f13454de3df36e337e01dbd55" FOREIGN KEY ("categoryId") REFERENCES bookstore.categories(id)
);



INSERT INTO bookstore.accounts (email,"password","fullName",phone,address,"role",active) VALUES
	 ('vtanh1905@gmail.com','$2b$10$gTQ19Qxadz8jAaqCtOfJUOXtAALtYJQKjQHbFYukOUddZy80gv6AS','Vũ Tuấn Anh','0966996874','1.11 (T2) C/c Thanh Niên, Bàu Cát 2, Phường 14, Tân Bình, TP.Hồ Chí Minh','CUSTOMER',true),
	 ('vtanh@gmail.com','$2b$10$OL04T9Qs4nUmX5ENSGGZquhSyAs7PwG2GoKqC6nvcgCCEOfO4claa','Vũ Tuấn Anh','0966996874','1.11 (T2) C/c Thanh Niên, Bàu Cát 2, Phường 14, Tân Bình, TP.Hồ Chí Minh','CUSTOMER',true),
	 ('vtanhxcxc@gmail.com','$2b$10$SCKrzZYovvKhlgClBdrOROZhkgStORWGltm.2McP.P8VFvJMFvPWG','Vũ Tuấn Anh','0966996874','1.11 (T2) C/c Thanh Niên, Bàu Cát 2, Phường 14, Tân Bình, TP.Hồ Chí Minh','CUSTOMER',true),
	 ('vtanh19051231@gmail.com','$2b$10$zYe7tQOAaAJr.zpr6eu.iepNlvJ51/U.vEuI1gtH8r0jkoiCsxs1a','Vũ Tuấn Anh','0966996874','1.11 (T2) C/c Thanh Niên, Bàu Cát 2, Phường 14, Tân Bình, TP.Hồ Chí Minh','CUSTOMER',true),
	 ('vtanhxcd@gmail.com','$2b$10$GzGcnKKfJS3kEvU1TRCFHOcrLBsx6FWdMcy7suJLBxKYgo05TgS/.','Vũ Tuấn Anh','0966996874','1.11 (T2) C/c Thanh Niên, Bàu Cát 2, Phường 14, Tân Bình, TP.Hồ Chí Minh','CUSTOMER',true),
	 ('vtanhcc@gmail.com','$2b$10$upbDd/FmxQI9Ch7r/Fa8q.Jd1ZM3rdrT5RCcym5Hk97BfSzHSQXOy','Vũ Tuấn Anh','0966996874','1.11 (T2) C/c Thanh Niên, Bàu Cát 2, Phường 14, Tân Bình, TP.Hồ Chí Minh','CUSTOMER',true),
	 ('string@gmail.com','$2b$10$usTdmWLfBZWs72Q3XTjE3e24fA6jhdYuQ0.aWZrdxhlvhQP.GUW06','Vũ Tuấn Anh','0987654321','123 A Street, 1 Ward, 1 District, A City','ADMIN',true);



INSERT INTO bookstore.categories ("name") VALUES
	 ('Văn Học'),
	 ('Kinh Tế'),
	 ('Ngoại Ngữ');


INSERT INTO bookstore.books ("name","imagePath",author,description,price,"salePrice","categoryId","createdBy","createdAt") VALUES
	 ('Oxford Advanced Learner''s Dictionary','images/Oxford Advanced Learner''s Dictionary-1687616357545','Oxford','Từ điển Anh – Anh – Việt dựa trên ấn bản OALD, được Viện Ngôn ngữ học thẩm định nội dung. Một trong những cuốn từ điển được bán chạy nhất mọi thời đại. Được phát triển từ 1948 với hơn 100 triệu người đang sử dụng.',625000,599000,3,'string@gmail.com','2023-06-24 14:19:18.958952'),
	 ('MM Publications','images/MM Publications-1687617444783','MM PUBLICATIONS','14 chủ đề và bài học về Ngữ pháp, Từ vựng thông qua các hoạt động theo định dạng của Bài kiểm tra YLE Starters / Movers / Flyers',330000,300000,3,'string@gmail.com','2023-06-24 14:37:25.925392'),
	 ('Summer Camp Flyers - A2','images/Summer Camp Flyers - A2-1687617504877','Bản Đại Học Huế','Bộ sách luyện thi dành cho lứa tuổi tiểu học, với 3 cấp độ theo chương trình luyện thi quốc tế, giúp người học có thể hoàn thành các bài thi theo các cấp độ khác nhau',138000,125000,3,'string@gmail.com','2023-06-24 14:38:25.980489'),
	 ('Mindset For IELTS Level 3 Student''s Book','images/Mindset For IELTS Level 3 Student''s Book-1687617812583','Cambridge University Press','Mindset For IELTS Level 3 Student''s Book With Testbank And Online Modules Have confidence in Cambridge, the writers of the IELTS test Mindset immerses you in a wide range of IELTS topics and guides you clearly through all the skills and strategies you need to prepare fully for test day: - Learning strategies improve your language skills in a structured IELTS context - Skill practice: Immerse yourself in a wide range of IELTS topics - Exam practice: Familiarise yourself with the IELTS test through authentic tasks. Achieve your goal with MINDSET for IELTS This Student''s Books includes an access code for Testbank, Online Skills Modules, Academic Study Skills and Language Modules.',395000,367350,3,'string@gmail.com','2023-06-24 14:43:33.726101'),
	 ('Complete IELTS B1 Workbook','images/Complete IELTS B1 Workbook-1687619000409','Cambridge','CD-ROM đính kèm chỉ tương thích Hệ điều hành Win XP và Vista Complete IELTS combines the very best in contemporary classroom practice with stimulating topics aimed at young adults wanting to study at university. Complete IELTS Bands 4-5 prepares students for the IELTS test at B1 (foundation level). It is designed to introduce students to the critical thinking required for IELTS and provide strategies and skills to maximise their score. The information, practice and advice contained in the course ensure that they are fully prepared for all parts of the test. The Workbook with Answers with Audio CD features reading, writing and listening exercises with answer key for homework. It provides further practice in the Student''s Book grammar and vocabulary and contains an Audio CD and recording scripts for the Workbook.',110000,104500,3,'string@gmail.com','2023-06-24 15:03:21.672225'),
	 ('IELTS Trainer 2 Academic','images/IELTS Trainer 2 Academic-1687619288383','Cambridge University Press','IELTS Trainer 2 is the perfect companion for IELTS Academic module exam preparation. As well as SIX full practice tests, it offers easy-to-follow, expert guidance and tips designed to guarantee exam success. The first two tests are fully guided with step-by-step advice on how to tackle each paper. Extra grammar, vocabulary and writing practice activities are informed by a bank of real candidates'' exam papers and focus on areas where students typically need most help.',200000,190000,3,'string@gmail.com','2023-06-24 15:08:09.544237'),
	 ('IELTS Grammar For Bands 6.5','images/IELTS Grammar For Bands 6.5-1687619361801','Cambridge University Press','IELTS Grammar For Bands 6.5 And Above With Answers And Downloadable Audio',565000,536750,3,'string@gmail.com','2023-06-24 15:09:22.988346'),
	 ('ELTS Vocabulary For Bands 6.5','images/ELTS Vocabulary For Bands 6.5-1687619407136','Cambridge University Press','IELTS Vocabulary For Bands 6.5 And Above With Answers And Downloadable Audio',447000,424650,3,'string@gmail.com','2023-06-24 15:10:08.282453'),
	 ('Fun Skills Level 5 Student''s Book','images/Fun Skills Level 5 Student''s Book-1687619606686','Cambridge University Press','Fun preparation for A2 Flyers works towards the skills you need to be ready on exam day. Meet Sage the Squirrel, Checklist Buddy and friends, created by kids around the world, who guide and entertain you through this exciting journey, practising exam tasks and giving great tips. Checklist Buddy helps them assess their own work, and Think Big Giraffe connects learning to their world. Topic-led lessons bring everything to life with songs, Grammar fun, animations and quirky photos! The Home Booklet provides extra skills practice, ''Fun boost'' activities to share with the family and fun stories featuring the characters.',329000,312550,3,'string@gmail.com','2023-06-24 15:13:28.184513'),
	 ('Fun Skills Level 2 Student''s Book','images/Fun Skills Level 2 Student''s Book-1687619657428','Cambridge University Press','Fun preparation for Pre A1 Starters covers all the skills you need to be ready on exam day. Meet Sage the Squirrel, Checklist Buddy and friends, created by kids around the world, who guide and entertain you through this exciting journey, practising exam tasks and giving great tips. Checklist Buddy helps them assess their own work, and Think Big Giraffe connects learning to their world. Topic-led lessons bring everything to life with songs, Grammar fun, animations and quirky photos! The Home Booklet provides extra skills practice, ''Fun boost'' activities to share with the family and fun stories featuring the characters.',329000,312550,3,'string@gmail.com','2023-06-24 15:14:18.838122');
INSERT INTO bookstore.books ("name","imagePath",author,description,price,"salePrice","categoryId","createdBy","createdAt") VALUES
	 ('Fun Skills Level 6 Student''s Book','images/Fun Skills Level 6 Student''s Book-1687619711323','Cambridge University Press','Fun preparation for A2 Flyers covers all the skills you need to be ready on exam day. Meet Sage the Squirrel, Checklist Buddy and friends, created by kids around the world, who guide and entertain you through this exciting journey, practising exam tasks and giving great tips. Checklist Buddy helps them assess their own work, and Think Big Giraffe connects learning to their world. Topic-led lessons bring everything to life with songs, Grammar fun, animations and quirky photos! The Home Booklet provides extra skills practice, ''Fun boost'' activities to share with the family and fun stories featuring the characters.',342000,324900,3,'string@gmail.com','2023-06-24 15:15:12.703285'),
	 ('Fun Skills Level 1 Student''s Book','images/Fun Skills Level 1 Student''s Book-1687619931029','Cambridge University Press','Fun preparation for Pre A1 Starters works towards the skills you need to be ready on exam day. Meet Sage the Squirrel, Checklist Buddy and friends, created by kids around the world, who guide and entertain you through this exciting journey, practising exam tasks and giving great tips. Checklist Buddy helps them assess their own work, and Think Big Giraffe connects learning to their world. Topic-led lessons bring everything to life with songs, Grammar fun, animations and quirky photos! The Home Booklet provides extra skills practice, ''Fun boost'' activities to share with the family and fun stories featuring the characters.',342000,324900,3,'string@gmail.com','2023-06-24 15:18:52.364251'),
	 ('Sách Hiểu Về Trái Tim','images/Sách Hiểu Về Trái Tim-1687620040642','Trí Việt','Là tác phẩm đầu tay của nhà sư Minh Niệm, người sáng lập dòng thiền hiểu biết (Understanding Meditation), kết hợp giữa tư tưởng Phật giáo Đại thừa và Thiền nguyên thủy Vipassana, nhưng Hiểu Về Trái Tim không phải tác phẩm thuyết giáo về Phật pháp. Cuốn sách rất “đời” với những ưu tư của một người tu nhìn về cõi thế. Ở đó, có hạnh phúc, có đau khổ, có tình yêu, có cô đơn, có tuyệt vọng, có lười biếng, có yếu đuối, có buông xả… Nhưng, tất cả những hỉ nộ ái ố ấy đều được khoác lên tấm áo mới, một tấm áo tinh khiết và xuyên suốt, khiến người đọc khi nhìn vào, đều thấy mọi sự như nhẹ nhàng hơn…',158000,130000,1,'string@gmail.com','2023-06-24 15:20:41.797057'),
	 ('Sách: Bạn Làm Việc Vì Ai?','images/S%C3%A1ch+B%E1%BA%A1n+L%C3%A0m+Vi%E1%BB%87c+V%C3%AC+Ai%3F-1687620187713','Minh Long','Nhiều bạn trẻ tốt nghiệp ra trường với mong muốn kiếm được công việc nghìn đô, chạy những chiến dịch nghìn tỷ, lãnh đạo nghìn nhân viên,… Nhưng thực tế thì để kiếm được một công việc trong mơ như trên là điều không hề dễ dàng. Các bạn quên mất rằng, trước khi trở thành ông chủ của một công ty lớn, bạn phải là ‘’ông chủ’’của chính mình đã. Trong cuốn sách ‘’Bạn làm việc vì ai?’’, tác giả Ân Nhiên và An Tình Lam đã chỉ ra 5 bước giúp bạn làm chủ chính mình trong công việc. ',75000,39000,2,'string@gmail.com','2023-06-24 15:23:08.923621'),
	 ('Những kẻ xuất chúng','images/d5b1011d-03ec-41c5-b7ab-18040702c521','Alphabooks','Cuốn sách Những kẻ xuất chúng sẽ giúp bạn tìm ra câu trả lời thông qua các phân tích về xã hội, văn hóa và thế hệ của những nhân vật kiệt xuất như Bill Gates, Beatles và Mozart, bên cạnh những thất bại đáng kinh ngạc của một số người khác (ví dụ: Christopher Langan, người có chỉ số IQ cao hơn Einstein nhưng rốt cuộc lại quay về làm việc trong một trại ngựa). Theo đó, cùng với tài năng và tham vọng, những người thành công đều được thừa hưởng một cơ hội đặt biệt để rèn luyện kỹ năng và cho phép họ vượt lên những người cùng trang lứa.',159000,127000,2,'string@gmail.com','2023-06-24 15:28:26.157356'),
	 ('Sách - Tip Công Sở 2 - Khả Năng Phán Đoán','images/4138ebdd-0002-470b-a659-e1e034d44133','Minh Long','Dù là trong cuộc sống hay trong công việc, luôn có những tình huống buộc chúng ta phải đưa ra phán đoán, đặc biệt là với những bạn trẻ mới bước chân vào môi trường công sở. Phán đoán chính xác không chỉ khiến năng lực làm việc của bạn được đánh giá cao mà còn thể hiện tố chất nghề nghiệp của bạn, tạo ấn tượng tốt đẹp trong mắt người khác.',76000,60800,2,'string@gmail.com','2023-06-24 15:37:28.878218'),
	 ('Chạm Đáy Nỗi Đau - Trầm Cảm Và Những Bài Học','images/d5b2d54b-06e6-49ee-b3ab-f5cd76699c53','Nhà Xuất Bản Phụ Nữ Việt Nam','Chạm đáy nỗi đau là câu chuyện về sự nỗ lực không ngừng nghỉ để vượt qua nghịch cảnh của tác giả khi đồng hành cùng căn bệnh trầm cảm của chồng và đối diện với sự ra đi của anh ấy. Trong nỗi đau mất mát, cô tìm thấy trong phương pháp thực hành chánh niệm của đạo Phật một khả năng có thể c.hữa trị vấn đề sức khỏe tinh thần này và khôi phục lại cuộc sống tốt đẹp. Những bài học rút ra từ bi kịch của tác giả soi rọi vào những lời dạy của đạo Phật có thể giúp ích cho những ai đang sống ngập chìm trong nỗi đau dai dẳng. Tác giả viết lại câu chuyện của m.ình như một hồi ký ngắn, chân thực và vô cùng xúc động.',130000,104000,1,'string@gmail.com','2023-06-24 15:40:46.692606'),
	 ('Đánh Thức Trí Thông Minh','images/b4ebe0e2-b5c4-4a84-80d9-ec26d736ab5d','Trí Việt','Sinh (1895-1986) là một tác gia và nhà diễn thuyết nổi tiếng về triết học và các vấn đề tinh thần. Các chủ đề ông quan tâm thường là: mục đích của thiền định, mối quan hệ giữa con người, phương cách để tạo nên sự thay đổi xã hội tích cực trên phạm vi toàn cầu. Cuộc sống và những lời dạy của Jiddu Krishnamurti trải dài trong phần lớn thế kỷ XX, được nhiều người tôn vinh là một con người có ảnh hưởng sâu sắc nhất vào ý thức nhân loại trong thời đại hiện nay.',228000,182300,1,'string@gmail.com','2023-06-24 16:01:12.00865'),
	 ('Giáo Dục Và Ý Nghĩa Cuộc Sống','images/c395ae35-9248-4824-8f40-0decc12ad52f','Trí Việt','Krishnamurti là tác giả của rất nhiều cuốn sách. Ở tuổi 90, Krishnamurti đã diễn thuyết tại Liên Hợp Quốc về chủ đề hòa bình và nhận thức. Được trao tặng Huân chương Hòa bình của Liên Hợp Quốc vào năm 1984, ông được xem là một hiền nhân, triết gia và nhà tư tưởng đã tạo ra ý nghĩa căn bản và mới mẻ cho tôn giáo bằng cách chỉ rõ một cách sống vượt khỏi tất cả các tôn giáo. Ông can đảm đối diện với những vấn đề của xã hội và phân tích bằng sự rõ ràng, tính khoa học những hoạt động của tâm trí con người. Ông không trình bày bất kỳ triết thuyết nào, trái lại chỉ nói về những sự việc có liên quan đến tất cả chúng ta trong cuộc sống hàng ngày.',68000,57800,1,'string@gmail.com','2023-06-24 16:14:10.392308'),
	 ('Being In Love','images/7d708a13-c117-415e-973e-380a1a776144','Trí Việt','Những người đói khát trong nhu cầu, những người luôn kỳ vọng ở tình yêu chính là những người đau khổ nhất. Hai kẻ đói khát tìm thấy nhau trong một mối quan hệ yêu đương cùng những kỳ vọng người kia sẽ mang đến cho mình thứ mình cần – về cơ bản sẽ nhanh chóng thất vọng về nhau và cùng mang đến ngục tù khổ đau cho nhau. Trong cuốn sách Yêu, Osho - bậc thầy tâm linh, người được tôn vinh là một trong 1000 người kiến tạo của thế kỷ 20 – đã đưa ra những kiến giải sâu sắc về nhu cầu tâm lý có sức mạnh lớn nhất của nhân loại và “chỉ cho chúng ta cách trải nghiệm tình yêu”.',168000,126000,1,'string@gmail.com','2023-06-26 02:29:59.856773');
INSERT INTO bookstore.books ("name","imagePath",author,description,price,"salePrice","categoryId","createdBy","createdAt") VALUES
	 ('Cảm Xúc','images/722222ab-f4ed-44cf-94af-666a79a311c6','Lâm Đặng Cam Thảo','Từ bao đời nay, chúng ta vẫn thường được dạy hãy đè nén cơn giận, nỗi buồn và vô số những cảm xúc bị gắn mác tiêu cực khác, bởi chúng có thể làm tổn thương những người xung quanh ta. Thậm chí, ta còn tin rằng một trong những tố chất tạo nên sự thành công của một người chính là khả năng kiểm soát cảm xúc của họ. Nhưng có bao giờ bạn nghĩ chính mình sẽ bị tổn thương khi cứ chất chứa mọi cảm xúc trong lòng hay không? Bạn có để ý và nhận ra mỗi khi mình đè nén những cơn thịnh nộ, sự lo lắng, bất an… thì lại dễ bị đau dạ dày hay tay chân run rẩy không? Hay bạn có từng thắc mắc tại sao mình không thể yêu thương ai đó trọn vẹn dù trái tim vẫn luôn hướng về họ?',188000,150400,1,'string@gmail.com','2023-06-26 02:30:56.485595'),
	 ('Tự Do Vượt Trên Sự Hiểu Biết','images/92fc1d82-0edf-49b5-806b-f654c94b176e','Trí Việt','Cuộc đời và tư tưởng của Krishnamurti có nhiều nét thú vị lạ thường; toàn bộ khối lượng đồ sộ các tác phẩm của ông và các tác phẩm viết về ông tương đương với khoảng 400 quyển sách cỡ trung; thật không dễ dàng để nắm bắt hết mọi điều ông cố gắng truyền tải. Đã có trên 70 đầu sách tổng hợp nội dung từ những buổi diễn thuyết, thảo luận trên khắp thế giới của Krishnamurti được phát hành và tái bản nhiều lần, các tác phẩm của ông được đông đảo độc giả đón nhận và trân quý. Trong số đó, Tự do vượt trên sự hiểu biết luôn chiếm giữ vị thế đặc biệt trong lòng bạn đọc. Chính Krishnamurti đã đề nghị Mary Lutyens – một tác giả chuyên nghiệp, và cũng là người bạn lâu năm – thực hiện quyển sách này, ông để bà toàn quyền quyết định mọi điều, kể cả thể loại và tựa sách. ',68000,57800,1,'string@gmail.com','2023-06-24 16:15:12.432278'),
	 ('Minh Triết Trong Đời Sống','images/e1c93962-5c32-4da2-8d22-90041c28acb6','Trí Việt','Cuộc đời và tư tưởng của Krishnamurti có nhiều nét thú vị lạ thường; toàn bộ khối lượng đồ sộ các tác phẩm của ông và các tác phẩm viết về ông tương đương với khoảng 400 quyển sách cỡ trung; thật không dễ dàng để nắm bắt hết mọi điều ông cố gắng truyền tải. Đã có trên 70 đầu sách tổng hợp nội dung từ những buổi diễn thuyết, thảo luận trên khắp thế giới của Krishnamurti được phát hành và tái bản nhiều lần, các tác phẩm của ông được đông đảo độc giả đón nhận và trân quý. Trong số đó, Tự do vượt trên sự hiểu biết luôn chiếm giữ vị thế đặc biệt trong lòng bạn đọc. Chính Krishnamurti đã đề nghị Mary Lutyens – một tác giả chuyên nghiệp, và cũng là người bạn lâu năm – thực hiện quyển sách này, ông để bà toàn quyền quyết định mọi điều, kể cả thể loại và tựa sách. ',85000,85000,1,'string@gmail.com','2023-06-24 16:18:59.246428'),
	 ('Đắc Nhân Tâm','images/c18b8032-30ed-441b-83b9-77c19808c726','Nguyễn Hiến Lê','Đắc nhân tâm là tựa sách hầu hết mọi người đều biết đến nhưng lại ngại đọc “phiên bản mới” vì chưa biết:',90000,58500,1,'string@gmail.com','2023-06-26 02:10:32.916331'),
	 ('90 Ngày Thực Hành Biết Ơn','images/1d4fb442-c364-4761-b9a2-9bf8f517089e','Hồng Đức','Bất kỳ ai trong cuộc đời cũng cần có những mối quan hệ gắn bó, ấm áp, nghĩa tình. Không chỉ là gia đình, người thân mà còn là thầy cô, bạn bè, những người chúng ta đã, đang và sẽ gặp. Thầy cô cho ta tri thức, dạy dỗ ta nên người thông qua những bài học giản dị mà ý nghĩa. Bạn bè là điểm tựa không thể thiếu vì họ luôn cùng ta vượt qua những thăng trầm trong cuộc sống. Những người ta bắt gặp sẽ đem đến cho ta những bài học, trải nghiệm, có thể vui, buồn, khổ đau, hạnh phúc,… nhưng cần thiết để ta hiểu được giá trị của cuộc sống để có thể vững vàng bước đi trên đường đời. Bởi thế, hãy biết ơn những người ta đã gặp, đã đi qua cuộc đời ta.',225000,206000,1,'string@gmail.com','2023-06-26 02:12:55.440242'),
	 ('Gieo Trồng Hạnh Phúc','images/f2c648a0-d9ea-46eb-9437-5aa36cb89d9e','Thái Hà','Chánh Niệm là nguồn năng lượng tỉnh thức đưa ta trở về với giây phút hiện tại và giúp ta tiếp xúc sâu sắc với sự sống trong mỗi phút giây của đời sống hằng ngày. Chúng ta không cần phải đi đâu xa để thực tập chánh niệm. Chúng ta có thể thực tập chánh niệm ngay trong phòng mình hoặc trên đường đi từ nơi này đến nơi khác. Ta vẫn có thể tiếp tục làm những công việc ta thường làm hằng ngày như đi, đứng, nằm, ngồi, làm việc, ăn, uống, giao tiếp, chuyện trò… nhưng với ý thức là mình đang làm những công việc ấy.',89000,66100,1,'string@gmail.com','2023-06-26 02:14:07.595297'),
	 ('Giận ','images/fe0c3f50-3d66-4224-af31-09cf927d72b6','Phương Nam','Giận là một cuốn sách hay của Thiền sư Thích Nhất Hạnh, nó mở ra cho ta những khả năng kỳ diệu, nhưng lại rất dễ thực hành để ta tự mình từng bướ thoát khỏi cơn giận và sống đẹp với xã hội quanh mình. Giận được xuất bản tại Hoa Kỳ ngày 10.9.2001, trước biến cố 11.9.2001 có một ngày. Vì thế Giận đã trở thành quyển sách bán chạy nhất Hoa Kỳ - 50.000 bản mỗi tuần - trong vòng 9 thá Tại Hàn Quốc, quyển sách này đã bán được 1 triệu bản trong vòng 11 tháng. Rất nhiều độc giả nhờ đọc sách này mà đã điều phục được tâm mình, sử dụng ái ngữ lắng nghe để hoà giải với người thân, đem lại hạnh phúc trong gia đình và trong cộng đồng của họ.',112700,112700,1,'string@gmail.com','2023-06-26 02:14:49.238859'),
	 ('Tìm Bình Yên Trong Gia Đình','images/b63d2c8a-559d-4ed9-ab4e-5989f34e7fa6','Thái Hà','“Tìm bình yên trong gia đình” cuốn sách của Sư ông Làng Mai Thích Nhất Hạnh là tập hợp nhiều câu hỏi vấn đáp của quý Phật tử, mọi người ở khắp nơi gửi về cho Sư ông để giải đáp những vấn đề xoay quanh các mối quan hệ trong gia đình, giữa vợ với chồng, cha mẹ với con cái và cả cách vượt qua nỗi đau khi mất đi người thân',99000,69100,1,'string@gmail.com','2023-06-26 02:15:33.51029'),
	 ('Vì Sao Bạn Có Mặt Trên Đời?','images/67f9e38f-e916-4f0d-9c52-c420314f4114','Đỗ Ái Nhi','Tử vi hằng tuần trên báo chỉ là một phần rất nhỏ trong chiêm tinh học. Với tác phẩm đầu tay của mình, nhà chiêm tinh học Chani sẽ chỉ cho bạn biết cách đọc bản đồ sao cá nhân như thế nào, là ảnh chụp bầu trời ngay khi bạn vừa chào đời. Bản đồ sao tiết lộ tài năng, thách thức và cơ hội của riêng bạn. Tìm hiểu và củng cố kiến thức về chiêm tinh giúp bạn có thể sống một cuộc sống đã được ấn định từ khi bạn được sinh ra.',128000,82000,1,'string@gmail.com','2023-06-26 02:24:27.335207'),
	 ('Vì Sao Bạn Có Mặt Trên Đời?','images/44bc16c4-eabe-4c9f-93d9-8fbfbccc6a0e','Trí Việt','Chuyển hóa tâm thức con người là trọng tâm của những điều Eckhart Tolle đề cập trong quyển sách nổi tiếng A New Earth - Thức Tỉnh Mục Đích Sống này. Theo ông, sự thức tỉnh là bước kế tiếp sẽ xảy ra trong quá trình phát triển tâm thức của nhân loại. Nhân loại sẽ bước sang một giai đoạn mà sự thức tỉnh trong tâm hồn sẽ tạo ra sự tự do và niềm hạnh phúc miên viễn trong mỗi con người và trên toàn thế giới.',119000,119000,1,'string@gmail.com','2023-06-26 02:27:45.828515');
INSERT INTO bookstore.books ("name","imagePath",author,description,price,"salePrice","categoryId","createdBy","createdAt") VALUES
	 ('Hiểu - Đường Đến Tự Do','images/77b9740b-45c0-4d9f-bfa8-c844911b3735','Lâm Đặng Cam Thảo','Tự do vốn là thứ mà con người vẫn luôn tìm kiếm từ bao đời nay. Có nhiều định nghĩa về khái niệm tự do, nhưng theo bậc thầy tâm linh Osho, khi được sống đúng với con người mà bạn được sinh ra một cách tự nhiên nhất, không bị tác động bởi một người nào hay bị uốn nắn bởi một tôn giáo nào, bạn đang được tự do một cách toàn vẹn. Đường đến tự do sẽ đầy ắp những câu hỏi cũng như sự hồ nghi, và chỉ khi hiểu được bản thân là ai, tự mình khám phá ra được cách vận hành của thế giới này thì ta mới thật sự chạm đến tự do.',168000,126000,1,'string@gmail.com','2023-06-26 02:31:34.916549'),
	 ('Hạnh Phúc Cầm Tay','images/34e89e3e-653e-40da-9cb0-63a8ebb16b8c','Thái Hà','Cuộc sống quanh ta đầy màu nhiệm, chánh niệm là trái tim của thiền tập, là nguồn năng lượng xuyên suốt không thể thay đổi. Một người sống trong chánh niệm, tâm an, sẽ khiến những người xung quanh vui vẻ, an nhiên và thậm chí thay đổi cả xã hội.',75000,55000,1,'string@gmail.com','2023-06-26 02:32:22.212105'),
	 ('Trở Về Từ Cõi Sáng','images/befa675c-3e29-4ade-9f23-78383de1db61','Trí Việt','Trở Về Từ Cõi Sáng viết về đời sống sau khi chết. Nếu khi còn sống chúng ta biết và hiểu về sự chết thì chết không có gì là đáng sợ nữa. Những chuyện có thật trong Trở Về Từ Cõi Sáng do nhà văn Nguyên Phong biên soạn và dịch thuật sẽ hé mở cánh cửa huyền bí tiết lộ vài điều bí mật về bên kia cửa tử.',98000,75000,1,'string@gmail.com','2023-06-26 02:33:30.34646');
