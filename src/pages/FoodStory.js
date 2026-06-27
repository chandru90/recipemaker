import React, { useState, useRef, useEffect } from "react";


export const FoodStory = () => {
  

  const [speakingId, setSpeakingId] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef(null);

  
  const speakText = (text, id) => {
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 1;

    const words = text.split(" ").length;
    const wordsPerSecond = 2.5;
    const duration = Math.ceil(words / wordsPerSecond);

    setSpeakingId(id);
    setRemainingTime(duration);
    setIsPaused(false);

    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    speech.onend = () => {
      clearInterval(timerRef.current);
      setSpeakingId(null);
      setRemainingTime(0);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(speech);
  };

  const pauseSpeech = () => {
    window.speechSynthesis.pause();
    clearInterval(timerRef.current);
    setIsPaused(true);
  };

  const resumeSpeech = () => {
    window.speechSynthesis.resume();
    setIsPaused(false);

    timerRef.current = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
   };


     const sections = [
      { id: "intro", title: "Introduction", description: "Food is far more than a source of physical nourishment—it is a powerful connector that links the mind, body, and soul in a deeply meaningful way. Every meal we consume influences not only our physical health but also our thoughts, emotions, and inner sense of peace.Food also has a strong impact on the mind. What we eat can affect our mood, focus, and mental clarity.Beyond the biological effects, food is closely tied to emotions and memories. A simple dish can remind us of childhood, family gatherings, or special moments, instantly evoking comfort and happiness.Eating mindfully—paying attention to flavors, textures, and the act of eating itself—can help calm the mind and create a sense of awareness in the present moment.Food carries cultural, spiritual, and emotional significance that feeds this inner dimension. Every culture in the world has unique culinary traditions that reflect its history, values, and identity. These traditions are often passed down through generations, preserving not just recipes, but stories, memories, and a sense of belonging . Gratitude also plays a key role in the connection between food and the soul. Taking a moment to appreciate a meal—acknowledging the effort that went into preparing it, the resources it required, and the nourishment it provides—can create a sense of contentment and peace." },
    {
    id: "100ad",
    title: "Food Around times",
    description: `Food is one of the most powerful reflections of human history. What people eat has always depended on climate, geography, technology, trade, religion, and culture. Over thousands of years, human diets have transformed from simple survival-based foods to complex, globally interconnected cuisines. This transformation is not only about changes in diet but also about the evolution of human civilization, innovation, migration, and cultural exchange. From prehistoric times to the modern world, food has continuously shaped and been shaped by human life.

  In the earliest stage of human existence, known as the prehistoric era, people survived as hunter-gatherers. Food was not cultivated or produced but obtained directly from nature. Early humans depended on hunting wild animals such as deer, boar, and fish, as well as gathering fruits, berries, nuts, seeds, roots, and tubers. Their diet was entirely dependent on seasonal availability and environmental conditions, making survival uncertain and challenging. A major turning point during this period was the discovery of fire. Fire allowed humans to cook food, making meat easier to digest and safer to consume by killing harmful bacteria. Cooking also improved taste and nutritional absorption, and it is believed to have contributed to the development of the human brain by increasing energy efficiency in digestion.

  A major transformation occurred during the Neolithic Revolution, around 10,000 to 3000 BCE, when humans shifted from hunting and gathering to agriculture. People began cultivating crops such as wheat, barley, millet, rice, maize, lentils, and chickpeas. Animals like cattle, goats, sheep, and pigs were domesticated. This allowed humans to settle in permanent villages and later cities. Food production became stable, surplus food was stored, and diets became more grain-based, forming the foundation of civilizations.

  As ancient civilizations emerged between 3000 BCE and 500 CE, food culture became more advanced. In Ancient Egypt, bread and beer were daily staples along with wheat, barley, onions, garlic, and lentils. In Ancient China, rice, millet, and soybeans dominated diets, and food was linked to balance and harmony. In Ancient India, rice, lentils, barley, and spices like turmeric and cumin were widely used. In Ancient Greece and Rome, diets included olives, wine, bread, cheese, figs, and fish. Across all civilizations, food reflected culture, religion, and social structure.

  During the medieval period (500–1500 CE), trade networks like the Silk Road expanded food diversity. Spices, sugarcane, rice, and citrus fruits spread globally. European diets relied on bread and stews, Middle Eastern diets included wheat, lamb, rice, and dates, and Asian diets focused on rice, noodles, and fermented foods. Food remained seasonal and dependent on preservation methods.

  During the Age of Exploration (1500–1700 CE), the Columbian Exchange transformed global diets. Foods such as potatoes, tomatoes, maize, cocoa, and chili peppers spread worldwide, while wheat, rice, sugarcane, and livestock moved to the Americas. This created the first global food system.

  The Industrial Revolution (1700–1900 CE) introduced mechanized farming, food processing, canning, and refrigeration. Urbanization reduced farming lifestyles, and processed foods became common, shifting diets toward industrial systems.

  In the 20th century, refrigeration, packaging, and globalization transformed food consumption. Fast food chains, processed snacks, and fusion cuisines emerged. Nutrition science developed, and food became more about convenience and lifestyle.

  In the 21st century, food culture is shaped by technology, health awareness, and sustainability. Organic farming, plant-based diets, and global food delivery systems are rising, while concerns about health and environment are increasing.

  Across history, food has evolved from survival to culture, from local to global, and from natural to processed and back toward natural again. It remains central to human identity, connection, and civilization.`
  },
      { id: "medieval1", title: "Food and Geography", description: "Food and geography are deeply interconnected, shaping what people eat, how food is produced, and how culinary traditions develop across the world. Geography, which studies places and environments and how humans interact with them, plays a central role in determining food systems. Every ingredient and cuisine is influenced by natural factors such as climate, soil, water, and landforms, along with human factors like culture, religion, trade, and migration. While geography determines what is possible to grow and produce, culture determines how food is prepared, shared, and given meaning.Physical geography forms the foundation of food production. Climate is one of the most important influences, as it decides which crops can grow in a region. Tropical climates support crops like rice, bananas, coconuts, sugarcane, and spices due to warm temperatures and heavy rainfall. This is why many South and Southeast Asian countries rely heavily on rice-based diets. In contrast, arid desert climates have limited water availability, so people depend on drought-resistant crops such as millet, barley, and dates, along with livestock like goats and camels. Temperate regions, such as Europe and North America, experience seasonal changes that allow the cultivation of a wide variety of crops including wheat, corn, apples, and vegetables. Cold regions with short growing seasons depend more on animal-based foods such as fish and preserved meats. Climate also influences food preservation methods, with hot regions relying on drying and fermentation, while colder regions use smoking and curing.Soil and fertility also play a crucial role in agriculture. Fertile soils, especially in river valleys, support intensive farming and high crop yields. Volcanic soils rich in minerals are ideal for crops like tea, coffee, and rice. Poor or sandy soils limit agricultural variety and often lead to pastoral lifestyles or reliance on hardy crops. Historically, major civilizations developed in fertile regions such as the Nile Valley in Egypt, the Indus Valley in India, and the Yellow River basin in China, where productive land supported early agriculture and population growth.Water resources are equally important for food production. Rivers like the Nile, Ganges, and Amazon support irrigation-based farming, while regions with regular rainfall depend on rain-fed agriculture. Areas with limited water supply rely on irrigation systems or animal herding. Access to water often determines food security, and regions facing water scarcity are more vulnerable to food shortages.Landforms also influence diets and food systems. Plains are ideal for large-scale farming, while mountains limit cultivation but support terrace farming and livestock grazing. Coastal regions depend heavily on seafood and marine resources, while islands often rely on fishing, coconuts, and imported food. For example, Himalayan regions depend on barley and yak products, while coastal Japan has a diet rich in fish and rice.Human geography adds another layer to the relationship between food and geography. Population distribution affects food consumption patterns, with urban areas relying on global food supply chains, rural areas depending on local agriculture, and densely populated regions requiring intensive farming systems. Culture plays a major role in shaping food habits, even in similar environments. For example, rice is consumed widely across Asia but prepared in different forms such as biryani, sushi, fried rice, or congee. Wheat is common in Europe but is used in bread, pasta, and pastries. Culture influences cooking methods, spices, meal structures, and eating traditions.Religion also significantly shapes food geography. Many South Asian cultures follow vegetarian diets due to religious beliefs, while Middle Eastern regions follow halal dietary laws. Fasting and feasting cycles in various religions also influence when and how food is consumed. These practices show how food is not only physical nourishment but also a part of spiritual and cultural identity.Migration further expands food geography by spreading culinary traditions across regions. When people move, they carry their food cultures with them, leading to fusion cuisines. Indian food in the United Kingdom, Chinese adaptations worldwide, and the evolution of Italian pizza in the United States are examples of how migration transforms food systems into global networks.Historically, geography has shaped food through early agricultural civilizations that developed in fertile regions such as Mesopotamia, Egypt, the Indus Valley, and China. Trade routes like the Silk Road spread spices, grains, and fruits across continents, increasing food diversity. The Columbian Exchange after 1492 was a major turning point, introducing crops like potatoes, tomatoes, maize, and cocoa to the Old World, while wheat, sugarcane, and livestock spread to the Americas, creating a truly global food system.Economic geography also influences food availability. Modern agriculture relies on machinery, fertilizers, and irrigation, while developed regions have industrialized food systems and developing regions often rely on traditional farming. Global trade networks allow food to travel long distances, but they also create inequality, where some regions have surplus food while others face food insecurity. Food deserts, where access to fresh and healthy food is limited, exist in both rural and urban areas.Environmental geography is becoming increasingly important due to climate change. Rising temperatures, droughts, and floods are affecting crop production and threatening food security worldwide. As a result, sustainable practices such as organic farming, crop rotation, water conservation, and local food systems are gaining importance.In today’s globalized world, food from one region can be consumed anywhere, such as sushi in India, pasta in Africa, or curry in Europe. However, this global exchange also raises concerns about environmental impact, loss of traditional food systems, and dependence on imported food.In conclusion, food and geography are inseparable. Geography determines what can be grown and produced, while culture shapes how it is consumed and valued. Over time, human innovation, trade, and migration have expanded food beyond natural boundaries, creating a global food system. Yet even today, geography remains the foundation of food identity, making food a reflection of both the Earth and human civilization." },
      { id: "medieval2", title: "The Columbian Exchange", description: "The Columbian Exchange refers to the widespread transfer of plants, animals, crops, diseases, people, and culture between the Old World (Europe, Asia, and Africa) and the New World (the Americas) following the voyages of Christopher Columbus in 1492. It is considered one of the most important events in world history because it permanently changed global food systems, economies, environments, and populations, creating the foundation of today’s interconnected world.Before 1492, the Old World and New World developed separately due to geographical isolation. The Old World—consisting of Europe, Asia, and Africa—already had established trade networks such as the Silk Road and Indian Ocean routes, through which crops, animals, and ideas were exchanged over time. In contrast, the New World, which included North, Central, and South America, had developed independently with unique civilizations such as the Aztecs, Mayans, and Incas, along with distinct crops and agricultural systems. This separation meant that both regions had completely different ecosystems, food sources, and diseases until contact was established.The Columbian Exchange was mainly triggered by European exploration, driven by the desire to find new trade routes to Asia, access luxury goods like spices, and expand economic and political power through colonization. Advances in navigation, shipbuilding, and mapping made long ocean voyages possible, while growing competition among European nations encouraged overseas expansion. Once colonies were established in the Americas, continuous interaction between continents began, allowing the exchange of goods and life forms on a massive scale.One of the most significant outcomes of the Columbian Exchange was the movement of crops between continents. The Americas contributed several important foods to the Old World. Potatoes, originating from the Andes, became a staple in Europe due to their high nutritional value and ability to grow in poor soil, helping support population growth. Maize (corn) spread widely to Africa, Europe, and Asia and became a major global staple. Tomatoes, originally from the Americas, transformed Mediterranean and especially Italian cuisine. Cocoa, used to make chocolate, became a luxury product in Europe, while chili peppers spread rapidly to Asia and Africa, becoming essential in cuisines such as Indian, Thai, and Chinese. Tobacco also became a major global cash crop.In return, the Old World introduced crops to the Americas, including wheat, rice, sugarcane, coffee, bananas, and various fruits. These crops significantly changed agricultural systems in the Americas, especially through plantation farming, where large-scale production was developed for export markets. Sugarcane, in particular, became one of the most profitable crops, deeply linked to global trade and labor systems.The exchange of animals also reshaped both continents. From the Old World, horses were introduced to the Americas and had a dramatic impact on transportation, hunting, and warfare, especially among Indigenous societies in North America. Cattle, pigs, sheep, goats, and chickens were also introduced and became central to meat, dairy, and farming systems. From the New World, fewer animals were introduced to Europe, though turkeys became popular. This imbalance highlights how differently ecosystems evolved in the two regions.However, one of the most devastating consequences of the Columbian Exchange was the spread of diseases. Europeans brought diseases such as smallpox, measles, influenza, and typhus to the Americas. Indigenous populations had no immunity to these diseases, resulting in catastrophic population loss, in some cases up to 80–90 percent. Entire societies collapsed or were severely weakened, which made European colonization easier. The Americas contributed fewer diseases in return, though syphilis is often linked to the New World.The environmental impact of the Columbian Exchange was also significant. Large areas of land were cleared for plantations, leading to deforestation and soil depletion. The introduction of new species disrupted local ecosystems and contributed to biodiversity loss. Agriculture became increasingly intensive and export-driven, especially in the Americas.Economically, the Columbian Exchange created a global trade system. Plantation economies developed in the Americas, producing crops like sugar, tobacco, and cotton for European markets. This led to the rise of the triangular trade system, where Europe supplied goods to Africa, Africa supplied enslaved people to the Americas, and the Americas exported raw materials back to Europe. This system became a major foundation of global capitalism but also depended heavily on exploitation and slavery.Socially and culturally, the Columbian Exchange led to major changes in diets and traditions. Foods became globally shared, and new fusion cuisines emerged. Tomatoes became essential in Italian cooking, chilies transformed Asian cuisine, and potatoes became a dietary staple in Europe. At the same time, millions of Africans were forcibly transported to the Americas through the slave trade, deeply shaping demographics and cultures in the New World.In terms of food geography, the Columbian Exchange created a truly global food system. Crops that were once limited to specific regions now grow worldwide, and most modern diets are a result of this exchange. Almost every meal today contains ingredients that originated from different continents.In conclusion, the Columbian Exchange was a turning point in world history that connected previously isolated continents into a single global system. It transformed agriculture, diets, economies, and cultures, bringing both great benefits and severe consequences. While it introduced new foods, improved global nutrition, and increased trade, it also caused disease, environmental damage, and social inequality. Today, its legacy is visible in the globalized food system that defines human life across the world." },
      { id: "earlymodern", title: "Early Modern Period", description: "Food production during the Industrial Revolution marked a major shift in human history, transforming agriculture from traditional, small-scale, manual farming into large-scale, mechanized, and scientifically managed production systems. Before industrialization, most people lived in rural areas and practiced subsistence farming, where food was produced mainly for family consumption using simple tools and animal or human labor. Agricultural output was limited, heavily dependent on weather and seasons, and vulnerable to famine due to poor storage and transport systems. Food was local, seasonal, and scarce in many regions, especially during bad harvests.A foundation for change was laid by early agricultural improvements such as the enclosure movement, crop rotation systems, and selective breeding of livestock. These innovations increased productivity even before machines were widely used. Crop rotation improved soil fertility, while selective breeding produced healthier and more productive animals. However, the major transformation came with mechanization.During the Industrial Revolution, farming machines such as seed drills, mechanical reapers, and threshing machines replaced manual labor, allowing farmers to cultivate larger areas of land more efficiently. The introduction of steam power further increased agricultural productivity by powering equipment used for ploughing and processing crops. As a result, food production increased significantly, creating surplus supplies that could support rapidly growing populations.Land use also changed, with large-scale farms replacing small traditional holdings. Monoculture farming became common, where single crops were grown over vast areas to maximize efficiency. Although this increased output, it reduced biodiversity and made agriculture more dependent on specific crops. At the same time, improvements in soil management and early chemical fertilizers, such as bone meal and guano, helped maintain and boost crop yields, marking the beginning of scientific agriculture.Livestock farming also became more efficient through selective breeding and better controlled farming environments, leading to increased production of meat, milk, and wool. Alongside production, food processing and preservation methods improved greatly. Innovations such as steam-powered milling, food canning, pasteurization, and early refrigeration allowed food to be stored longer, transported over greater distances, and made safer for consumption. This reduced food waste and supported expanding urban populations.Transportation developments, especially railways and steamships, played a crucial role in linking rural production areas with urban markets and even international trade networks. Food could now be moved quickly and efficiently, integrating agriculture into a global economy. As cities grew rapidly during industrialization, demand for food increased, shifting farming from subsistence to commercial production aimed at urban markets.Global trade further expanded food production systems through colonial networks, where colonies supplied raw agricultural goods like sugar, tea, and coffee to industrialized nations. This created a global food system, but also introduced inequalities and reliance on plantation agriculture in many regions.Despite increased food availability, industrialization also had negative consequences. Many rural workers lost their livelihoods and moved to cities, where they often depended on processed and less nutritious food. Environmental impacts included deforestation, soil degradation, and loss of biodiversity due to intensive and monoculture farming practices. Social inequalities also emerged in access to quality food.In conclusion, food production during the Industrial Revolution was transformed from traditional farming into a mechanized, industrial, and globally connected system. It greatly increased food supply and supported population growth, while also laying the foundation for modern agriculture. However, it also introduced environmental challenges and social inequalities that continue to influence global food systems today." },
      { id: "industrial", title: "Industrial Revolution", description: "The value of eating certain foods to maintain health was recognized long before vitamins were identified in modern science. The ancient Egyptians knew that feeding liver to a person may help with night blindness, an illness now known to be caused by a vitamin A deficiency.[31] The advance of ocean voyages during the Age of Discovery resulted in prolonged periods without access to fresh fruits and vegetables, and made illnesses from vitamin deficiency common among ships' crews.[32] In 1747, the Scottish surgeon James Lind discovered that citrus foods helped prevent scurvy, a particularly deadly disease in which collagen is not properly formed, causing poor wound healing, bleeding of the gums, severe pain, and death;[31][better source needed] Portuguese and Spanish sailors had independently known about the disease they acquired and how it was reduced after eating oranges and vegetables such as yams and turnips.[32] In 1753, Lind published his Treatise on the Scurvy, which recommended using lemons and limes to avoid scurvy, which was adopted by the British Royal Navy. This led to the nickname limey for British sailors. However, during the 19th century, limes grown in the West Indies were substituted for lemons; these were subsequently found to be much lower in vitamin C.[34] As a result, Arctic expeditions continued to be plagued by scurvy and other deficiency diseases. In the early 20th century, when Robert Falcon Scott made his two expeditions to the Antarctic, the prevailing medical theory was that scurvy was caused by tainted canned food.In 1881, Russian medical doctor Nikolai Lunin studied the effects of scurvy at the University of Tartu. He fed mice an artificial mixture of all the separate constituents of milk known at that time, namely the proteins, fats, carbohydrates, and salts. The mice that received only the individual constituents died, while the mice fed by milk itself developed normally. He made a conclusion that a natural food such as milk must therefore contain, besides these known principal ingredients, small quantities of unknown substances essential to life. However, his conclusions were rejected by his advisor, Gustav von Bunge.[36] A similar result by Cornelis Adrianus Pekelharing appeared in Dutch medical journal Nederlands Tijdschrift voor Geneeskunde in 1905,[a] but it was not widely reported.In East Asia, where polished white rice was the common staple food of the middle class, beriberi resulting from lack of vitamin B1 was endemic. In 1884, Takaki Kanehiro, a British-trained medical doctor of the Imperial Japanese Navy, observed that beriberi was endemic among low-ranking crew who often ate nothing but rice, but not among officers who consumed a Western-style diet. With the support of the Japanese navy, he experimented using crews of two battleships; one crew was fed only white rice, while the other was fed a diet of meat, fish, barley, rice, and beans. The group that ate only white rice documented 161 crew members with beriberi and 25 deaths, while the latter group had only 14 cases of beriberi and no deaths. This convinced Takaki and the Japanese Navy that diet was the cause of beriberi, but they mistakenly believed that sufficient amounts of protein prevented it.[30] That diseases could result from some dietary deficiencies was further investigated by Christiaan Eijkman, who in 1897 discovered that feeding unpolished rice instead of the polished variety to chickens helped to prevent a kind of polyneuritis that was the equivalent of beriberi.[38] The following year, Frederick Hopkins postulated that some foods contained accessory factors – in addition to proteins, carbohydrates, fats etc. – that are necessary for the functions of the human body.[31]" },
      { id: "century20", title: "Food and Travel", description: "Food and travel have always been interconnected throughout human history. As humans moved from place to place in search of food, trade, religion, and exploration, the need for shelter and nourishment gave rise to hospitality systems. Over time, these systems evolved into inns, lodges, and modern hotels, forming the foundation of today’s global hospitality industry.In the prehistoric period, humans were nomadic and depended on hunting and gathering. Travel was essential for survival, and food was consumed immediately or preserved in simple ways such as drying. There were no formal systems of hospitality, but sharing food within groups marked the beginning of social cooperation.With the rise of agriculture in the ancient period, people began settling in communities, producing surplus food. This enabled long-distance travel for trade and religious purposes. Early hospitality systems emerged in the form of temples, rest houses, and basic inns. In India, the tradition of offering free meals to travellers was common, while other civilizations also practiced hospitality as a social duty.During the medieval period, trade routes expanded significantly, increasing the movement of people. Establishments such as caravanserais, inns, and dharamshalas provided travellers with food, water, and shelter. Food was simple and locally sourced, and preservation techniques like salting and drying were widely used.The early modern period witnessed global exploration and overseas trade. Travel became more frequent and complex, leading to the development of structured inns and taverns. Food culture expanded as new ingredients and cooking methods spread across continents through trade.A major transformation occurred during the Industrial Revolution. The introduction of railways and steamships made travel faster and more accessible. This led to the emergence of modern hotels, especially in cities and transport hubs. Hotels began offering standardized accommodation, organized dining services, and improved hygiene, marking the beginning of professional hospitality.In the modern era, globalization and technological advancements have revolutionized the hospitality industry. Hotels now cater to diverse needs, offering luxury and budget options along with a wide variety of cuisines. Online booking systems, digital services, and advanced kitchen management have enhanced customer experience. Food travel has also become a key part of tourism, allowing people to explore cultures through cuisine.In conclusion, the development of food travel and hotels reflects the evolution of human civilization. From basic survival and food sharing to a sophisticated global industry, hospitality has continuously adapted to human needs. Today, hotels serve not only as places of accommodation but also as centers of cultural exchange and culinary experiences, connecting people across the world." },
      { id: "modern", title: "Cooking and Kitchens", description: "Food is one of the most essential needs of human life, and its relationship with seasons is both natural and scientific. Since ancient times, humans have followed seasonal eating patterns, consuming foods that are naturally available at specific times of the year. This practice is not only based on tradition but also supported by scientific principles related to human biology, environmental conditions, and plant growth. Understanding this connection helps maintain good health and promotes harmony with nature.Seasonal eating refers to consuming fruits, vegetables, and other foods that are harvested during their natural growing period. In earlier times, before refrigeration and modern transport, people depended entirely on locally available seasonal foods. Even today, research shows that seasonal foods are fresher, more nutritious, and better suited to the body’s needs.During the summer season, high temperatures cause excessive sweating and loss of water and minerals. To maintain balance, the body requires cooling and hydrating foods. Fruits like watermelon and vegetables like cucumber, along with coconut water, are rich in water and essential electrolytes. These foods are light, easy to digest, and help regulate body temperature. Scientifically, they prevent dehydration and heat-related illnesses, while also supporting a slower digestive system that occurs during extreme heat.In contrast, winter brings cold temperatures, and the body needs more energy to maintain warmth. This results in increased appetite and metabolism. Foods such as nuts, seeds, ghee, and root vegetables like carrots and sweet potatoes are commonly consumed. These foods are rich in fats and carbohydrates, which generate heat and provide energy. This process supports thermoregulation, allowing the body to maintain its internal temperature.The monsoon season is marked by high humidity and a higher risk of infections due to the growth of bacteria and viruses. During this time, digestion tends to weaken, and the body becomes more vulnerable to illness. As a result, people prefer warm, freshly cooked foods with spices such as ginger, turmeric, and garlic. These ingredients have antimicrobial and anti-inflammatory properties, which help boost immunity and improve digestion. Hot soups and herbal drinks also play an important role in maintaining health.Spring is considered a season of renewal. After consuming heavy foods in winter, the body benefits from lighter and detoxifying foods such as leafy greens, sprouts, and fresh fruits. These foods are rich in fiber, vitamins, and antioxidants, helping cleanse the body and improve digestion. Autumn, on the other hand, acts as a transition period between summer and winter, requiring a balanced diet to prepare the body for seasonal changes.The science behind seasonal foods is closely linked to plant biology, particularly the process of Photosynthesis. This process depends on sunlight, temperature, and water availability, which vary across seasons. As a result, different crops grow in different conditions. For example, mangoes thrive in hot climates, while wheat grows better in cooler temperatures. This natural cycle ensures that foods produced in a particular season are best suited for consumption during that time.Another important concept is the Circadian Rhythm, which regulates the body’s sleep, digestion, and metabolism. Seasonal changes in daylight and temperature influence this rhythm. Eating seasonal foods helps the body adjust to these changes, such as consuming lighter foods in summer and heavier foods in winter, aligning with metabolic needs.Seasonal eating also strengthens the immune system. Each season presents unique health challenges, including dehydration in summer, infections during monsoon, and colds in winter. Seasonal foods provide essential nutrients like vitamins, antioxidants, and medicinal compounds that help the body resist these challenges and maintain overall well-being.In addition to health benefits, seasonal eating supports environmental sustainability. Growing food in its natural season requires fewer chemicals, less energy for storage, and minimal processing. It also encourages the consumption of locally grown produce, which supports farmers and reduces environmental impact.However, modern technology has made all types of food available throughout the year. While convenient, this often reduces nutritional quality and increases reliance on processed foods, leading to health issues such as obesity and digestive disorders. Therefore, it is important to understand and follow seasonal eating habits.In conclusion, the relationship between food and seasons is deeply rooted in science. Seasonal foods are aligned with both natural agricultural cycles and the body’s changing needs. From cooling foods in summer to energy-rich foods in winter and immunity-boosting foods during the monsoon, each season offers the right nutrition for health and balance. By adopting seasonal eating practices, we can improve our health, protect the environment, and stay connected to nature" },
      { id: "connection", title: "Food  for seasons", description: "Food is one of the most essential needs of human life, and its relationship with seasons is both natural and scientific. Since ancient times, people have followed seasonal eating patterns, consuming foods that are naturally available during specific times of the year. This practice is not only based on tradition but also supported by science. The connection between food and seasons is closely linked to human biology, environmental conditions, and plant growth processes. Understanding this relationship helps us maintain better health and live in harmony with nature.Seasonal eating refers to consuming fruits, vegetables, and other foods that are harvested during their natural growing season. Before the development of modern technology such as refrigeration and transportation, people depended entirely on locally available seasonal foods. Even today, scientific research supports the idea that seasonal foods are more nutritious, fresher, and better suited to the body’s needs.During the summer season, the body experiences high temperatures, leading to excessive sweating and loss of water and essential minerals. As a result, the body requires foods that help in cooling and hydration. Summer foods such as watermelon, cucumber, and coconut water have high water content and provide essential electrolytes. These foods are light, easy to digest, and help maintain the body’s temperature. From a scientific perspective, such foods prevent dehydration and heat-related illnesses. The digestive system also tends to slow down in extreme heat, making lighter meals more suitable.In contrast, the winter season brings cold temperatures, and the body requires more energy to maintain its internal warmth. This leads to an increase in appetite and metabolism. Therefore, winter diets usually include energy-rich foods such as nuts, seeds, ghee, and root vegetables like carrots and sweet potatoes. These foods are high in fats and carbohydrates, which help generate heat and provide energy. Scientifically, this supports thermoregulation—the process by which the body maintains its internal temperature.The rainy or monsoon season is characterized by high humidity and an increased risk of infections due to the growth of bacteria and viruses. During this time, the digestive system becomes weaker, and people are more prone to illnesses. Therefore, foods consumed during this season are usually warm, freshly cooked, and rich in spices such as ginger, turmeric, and garlic. These ingredients have antimicrobial and anti-inflammatory properties, which help boost immunity and protect the body from infections. Hot soups and herbal drinks also aid digestion and maintain overall health.Spring is considered a season of renewal and rejuvenation. After the heavy and rich foods consumed in winter, the body benefits from lighter and detoxifying foods. Leafy greens, sprouts, and fresh fruits are commonly consumed during this time. These foods are rich in fiber, vitamins, and antioxidants, which help cleanse the body and improve digestion. Similarly, autumn acts as a transition period between summer and winter, requiring a balanced diet that prepares the body for upcoming changes in temperature.The science behind seasonal foods is also closely related to plant biology. Plants grow and produce food through the process of Photosynthesis, which depends on sunlight, temperature, and water availability. Different crops require different environmental conditions, which is why certain foods grow only in specific seasons. For example, fruits like mangoes grow in hot climates, while crops like wheat thrive in cooler conditions. This natural cycle ensures that the food produced is best suited for consumption during that particular season.Another important scientific concept related to seasonal eating is the Circadian Rhythm, which refers to the body’s internal clock. This rhythm regulates various functions such as sleep, digestion, and metabolism. It is influenced by environmental factors like daylight and temperature. Seasonal changes can affect this rhythm, and eating seasonal foods helps the body adapt more effectively. For instance, lighter foods in summer and heavier foods in winter align with the body’s changing metabolic needs.Seasonal eating also plays a vital role in strengthening the immune system. Each season brings its own set of health challenges, such as dehydration in summer, infections during the monsoon, and colds in winter. Seasonal foods provide the necessary nutrients to combat these challenges. Fruits rich in vitamin C, vegetables with antioxidants, and spices with medicinal properties all contribute to improved immunity and overall well-being.In addition to health benefits, seasonal eating has environmental advantages. Growing foods in their natural season requires fewer artificial inputs such as chemicals, preservatives, and energy for storage. This reduces environmental impact and supports sustainable agriculture. It also promotes the consumption of locally grown foods, benefiting farmers and local economies.However, in modern times, technological advancements have made it possible to access all kinds of foods throughout the year. While this offers convenience, it often leads to reduced nutritional quality and increased consumption of processed foods. As a result, people may face health issues such as obesity, digestive problems, and lifestyle diseases. This makes it even more important to understand and follow the principles of seasonal eating.In conclusion, the relationship between food and seasons is deeply rooted in science. Seasonal foods are not only a result of natural agricultural cycles but also a response to the body’s changing needs. From hydration in summer to energy in winter and immunity during the monsoon, each season offers foods that support health and balance. By understanding the scientific basis of seasonal eating and incorporating it into daily life, we can improve our health, protect the environment, and maintain a closer connection with nature." },

    
     ]



  return (
    <div className="sm:flex-col lg:flex w-full ">
      {/* LEFT SIDEBAR */}
      <div className="sm:w-full lg:w-1/5 h-screen lg:fixed left-0 top-0 bg-black/60 text-white flex flex-col items-center pt-12 space-y-4">
        <h1 style={{ fontFamily: "Algerian", fontSize: "2.5rem" }}>
          Explorer
        </h1>

    

        {sections.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              document
                .getElementById(item.id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm hover:text-black transition"
            style={{ fontFamily: "Old English Text MT" }}
          >
          <p className="sm: text-2xl">{item.title}</p>  
          </button>
        ))}
      </div>

      {/* RIGHT CONTENT */}
      <div className="md:ml-[20%] md:w-[80%] flex flex-col ">
        {/* TOP IMAGE */}
        {/* <div
          className="w-full"
          style={{
            backgroundImage: `url("foodstories.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        /> */}

        <div
  className="w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[100vh] bg-cover bg-center"
  style={{
    backgroundImage: `url("foodstories.png")`,
  }}
/>

        {/* SECTIONS */}
        <div>
          {sections.map((item) => (
          <div
  key={item.id}
  id={item.id}
  className="relative w-full flex items-start sm:items-center justify-center
             p-4 sm:p-6 md:p-10
             min-h-[65vh] sm:min-h-[50vh] md:min-h-[100vh]
             bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url("sample.jpg")`,
  }}
>
              <div className="absolute inset-0 bg-white/90" />

              <div className="relative z-10 max-w-4xl space-y-6 bg-black/10 p-6 rounded-lg">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <h2 className="text-2xl font-bold">{item.title}</h2>

                  <button
                    onClick={() => {
                      if (speakingId === item.id) {
                        isPaused
                          ? resumeSpeech()
                          : pauseSpeech();
                      } else {
                        speakText(item.description, item.id);
                      }
                    }}
                    className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                  >
                    {speakingId === item.id
                      ? isPaused
                        ? `Listen (${formatTime(
                            remainingTime
                          )})`
                        : `⏸ Pause (${formatTime(
                            remainingTime
                          )})`
                      : "🔊 Listen"}
                  </button>
                </div>

                <p
                  style={{
                    fontFamily: "Pristina",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FoodStory;

// "use client";

// import React, { useState, useRef, useEffect } from "react";

// export const FoodStory = () => {

//   const [sections, setSections] = useState([]);
//   const [speakingId, setSpeakingId] = useState(null);
//   const [remainingTime, setRemainingTime] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const timerRef = useRef(null);


//   // GET STORIES FROM CRUDCRUD
//   useEffect(() => {

//     const getStories = async () => {
//       try {

//         const resp = await fetch(
//           "https://crudcrud.com/api/f9099525e985443097e6bcbb1cd33738/createstory"
//         );

//         const data = await resp.json();

//         console.log(data);


//         const formattedStories = data.map((item,index)=>({
//           id: item._id || index,
//           title: item.title || `Story ${index + 1}`,
//           description: item.story
//         }));


//         setSections(formattedStories);


//       } catch(error){

//         console.log(
//           "Error loading stories:",
//           error
//         );

//       }
//     };


//     getStories();

//   },[]);



//   // TEXT TO SPEECH
//   const speakText = (text,id)=>{

//     if(typeof window === "undefined") return;


//     window.speechSynthesis.cancel();


//     const speech =
//       new SpeechSynthesisUtterance(text);


//     speech.lang="en-US";
//     speech.rate=1;


//     const words=text.split(" ").length;

//     const duration=Math.ceil(
//       words / 2.5
//     );


//     setSpeakingId(id);
//     setRemainingTime(duration);
//     setIsPaused(false);



//     clearInterval(timerRef.current);


//     timerRef.current=setInterval(()=>{

//       setRemainingTime(prev=>{

//         if(prev<=1){

//           clearInterval(timerRef.current);

//           return 0;
//         }


//         return prev-1;

//       });

//     },1000);



//     speech.onend=()=>{

//       clearInterval(timerRef.current);

//       setSpeakingId(null);
//       setRemainingTime(0);
//       setIsPaused(false);

//     };


//     window.speechSynthesis.speak(
//       speech
//     );

//   };




//   const pauseSpeech=()=>{

//     window.speechSynthesis.pause();

//     clearInterval(timerRef.current);

//     setIsPaused(true);

//   };




//   const resumeSpeech=()=>{


//     window.speechSynthesis.resume();


//     setIsPaused(false);


//     timerRef.current=setInterval(()=>{


//       setRemainingTime(prev=>{


//         if(prev<=1){

//           clearInterval(timerRef.current);

//           return 0;

//         }


//         return prev-1;


//       });


//     },1000);

//   };





//   const formatTime=(seconds)=>{


//     const mins=Math.floor(
//       seconds/60
//     );


//     const secs=seconds%60;


//     return `${mins}:${secs<10?"0":""}${secs}`;

//   };





//   return (


//     <div className="flex flex-col lg:flex-row w-full">


//       {/* SIDEBAR */}

//       <div className="
//       lg:w-1/5
//       w-full
//       h-screen
//       fixed
//       left-0
//       top-0
//       bg-black/60
//       text-white
//       flex
//       flex-col
//       items-center
//       pt-10
//       space-y-4
//       ">


//         <h1
//         className="text-4xl"
//         >
//           Explorer
//         </h1>



//         {
//           sections.map(item=>(


//             <button

//             key={item.id}


//             onClick={()=>{

//               document
//               .getElementById(item.id)
//               ?.scrollIntoView({
//                 behavior:"smooth"
//               })

//             }}


//             >

//             {item.title}


//             </button>


//           ))
//         }


//       </div>





//       {/* CONTENT */}


//       <div className="
//       lg:ml-[20%]
//       lg:w-[80%]
//       w-full
//       ">



//         <div

//         className="
//         w-full
//         min-h-screen
//         bg-cover
//         bg-center
//         "

//         style={{
//           backgroundImage:
//           `url("/foodstories.png")`
//         }}

//         />




//         {
//           sections.map(item=>(


//           <div

//           key={item.id}

//           id={item.id}

//           className="
//           min-h-screen
//           p-10
//           bg-cover
//           bg-center
//           "

//           style={{
//             backgroundImage:
//             `url("/sample.jpg")`
//           }}


//           >


//           <div
//           className="
//           bg-white/90
//           p-6
//           rounded-xl
//           "
//           >


//           <div
//           className="
//           flex
//           justify-between
//           items-center
//           "
//           >


//           <h2
//           className="text-3xl font-bold"
//           >
//             {item.title}
//           </h2>



//           <button

//           onClick={()=>{


//             if(
//               speakingId===item.id
//             ){

//               isPaused
//               ?
//               resumeSpeech()
//               :
//               pauseSpeech();

//             }

//             else{

//               speakText(
//                 item.description,
//                 item.id
//               )

//             }


//           }}


//           className="
//           bg-black
//           text-white
//           px-4
//           py-2
//           rounded
//           "

//           >


//           {
//             speakingId===item.id

//             ?

//             isPaused
//             ?
//             `▶ ${formatTime(
//               remainingTime
//             )}`

//             :

//             `⏸ ${formatTime(
//               remainingTime
//             )}`


//             :

//             "🔊 Listen"

//           }


//           </button>


//           </div>





//           <p

//           className="
//           mt-6
//           text-xl
//           "

//           style={{
//             fontFamily:"Pristina"
//           }}

//           >

//           {item.description}


//           </p>


//           </div>



//           </div>


//           ))
//         }


//       </div>



//     </div>


//   );

// };



// export default FoodStory;