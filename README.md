# 👋 Introduction
OBS Counter is a simple counter designed to enhance your live streaming experience. It is specifically created to be integrated into live streaming software such as OBS, allowing you to display one or more counters on-screen, adding a visually appealing element to your live broadcasts.

# 👀 Preview
<div style="display: flex;">
<img src="https://media.discordapp.net/attachments/1028380395114340392/1204065695508340776/Main.png?ex=65d36090&is=65c0eb90&hm=95b37f0f4653a7a8042354f3a92f2963cb674bf8a2eb5d278615712d933a22de" alt="" height="350">
<img src="https://cdn.discordapp.com/attachments/1028380395114340392/1204065695852134490/Main_2.png?ex=65d36090&is=65c0eb90&hm=e627c28281022d42b18d5b549d69f3f117a7a484eb5de3733b3b33bbdcaf2e16" alt="" height="350">
</div>

___

# 📥 Installation (Windows Only)
* [Download the latest release](https://github.com/Reverseeh/OBS-Counter/releases/tag/1.0.0) of OBS Counter.
* Extract the files to a location of your choice.
* Open "OBS Counter.exe".

# ⚙️ Usage
**Add OBS Counter to Your Stream:**
* Open OBS Studio and go to the scene where you want to add the counters.
* Click on the `+` button in the "Sources" panel.
* Select "Window Capture" from the dropdown menu.
* Name the source (e.g., "Counter 1") and click "OK".
* In the "Window" dropdown, select the OBS Counter window and disable "Capture Cursor".
* Click "OK" to add the source.
* Right-click on the counter source in the "Sources" panel and select "Filters".
* Click on the `+` button and choose "Crop/Pad".
* Adjust Crop/Pad Settings:
   - In the "Left" field, enter `15`.
   - In the "Top" field, enter `70`.
   - In the "Right" field, enter `15`.
   - In the "Bottom" field, enter `160`.
* Click "Close" to exit the Filters window and apply the crop settings.

**Adding Multiple Counters:**
* To add more counters, open "OBS Counter.exe" again.
* In OBS Studio, duplicate the source already created for the first counter.
* In the duplicated source's properties, select the appropriate OBS Counter from the "Window" dropdown.
___

# 🗒️ License
OBS Counter is licensed under the [GPL-3.0](https://github.com/Reverseeh/OBS-Counter/blob/main/LICENSE) License.

# ✍️ Contributing
I'm working on the project by myself, and I'm not an expert, so any contribution is welcome!
