/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';
//
// function App() {
//   const isDarkMode = useColorScheme() === 'dark';
//
//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }
//
// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();
//
//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
//
// export default App;

//---------------------------------------------------
// import React from 'react';
// import { View, Text, StyleSheet, StatusBar, useColorScheme } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Halo Mobile Developer!</Text>
//       <Text style={styles.subtitle}>Komponen native perdana Anda.</Text>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   title: { fontSize: 20, fontWeight: 'bold', color: '#0f172a' },
//   subtitle: { fontSize: 14, color: '#64748b', marginTop: 4 },
// });

// CardDemo:
// export default function CardDemo() {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.heading}>Kartu Profil</Text>
//       <Text style={styles.body}>Styling Native Terorganisir rapi</Text>
//     </View>
//   )
// };
//
// const styles = StyleSheet.create({
//   card: {backgroundColor: '#fffff', padding: 20, borderRadius: 12},
//   heading: { fontSize: 18, fontWeight: 'bold', color: '#1e40af' },
//   body: { fontSize: 14, color: '#475569', marginTop: 6 },
// });

    // export default function RowLayoutDemo() {
    //   return (
    //     <View style={styles.row}>
    //       <View style={[styles.box, { backgroundColor: '#38bdf8'}]}>
    //         <Text style={styles.label}>Kolom 1</Text>
    //       </View>
    //       <View style={[styles.box, { backgroundColor: '#34d399'}]}>
    //         <Text style={styles.label}>Kolom 2</Text>
    //       </View>
    //     </View>
    //   )
    // };

    // const styles = StyleSheet.create({
    //   row: { flexDirection: 'row', gap: 12, padding: 16},
    //   box: { flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 8},
    //   label: { color: '#ffff',fontWeight: 'bold' },
    // });

import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// ==========================================
// DATA STATIK (DUMMY DATA TANPA STATE)
// ==========================================
const PROKER_DATA = [
  { id: '1', title: 'Seminar Nasional Tech 2026', date: '15 Nov 2026', status: 'Upcoming', dept: 'Divisi R&D' },
  { id: '2', title: 'Workshop React Native', date: '28 Okt 2026', status: 'Ongoing', dept: 'Divisi Pendidikan' },
  { id: '3', title: 'Makrab & LKMM-TD HIMA', date: '10 Des 2026', status: 'Upcoming', dept: 'Divisi PSDM' },
  { id: '4', title: 'HIMA Care & Pengabdian', date: '05 Jan 2027', status: 'Planning', dept: 'Divisi Humas' },
];

const MEMBER_DATA = [
  { id: '1', name: 'Ardian Syah Fajar R.', role: 'Ketua Umum', phone: '0812-3456-7890', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' },
  { id: '2', name: 'Muhammad Fillah R.', role: 'Wakil Ketua', phone: '0812-9876-5432', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
  { id: '3', name: 'Abdullah Muzakki', role: 'Kabid Kominfo', phone: '0857-1122-3344', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
  { id: '4', name: 'Siti Nurhaliza', role: 'Sekretaris Umum', phone: '0813-4455-6677', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
];

// ==========================================
// 1. SCREEN 1: DASHBOARD
// ==========================================
const HomeScreen = () => (
  <View style={styles.pageContainer}>
    <ScrollView contentContainerStyle={styles.innerScroll}>
      <View style={styles.headerBanner}>
        <Text style={styles.headerGreeting}>Selamat Datang,</Text>
        <Text style={styles.headerTitle}>HIMA INFORMATIKA</Text>
        <Text style={styles.headerSubtitle}>Kabinet Sinergi & Inovasi 2026</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>6</Text>
          <Text style={styles.statLabel}>Divisi</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Proker</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>45</Text>
          <Text style={styles.statLabel}>Pengurus</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📌 Pengumuman Terbaru</Text>
        <Text style={styles.cardText}>
          Rapat Pleno Tengah Tahun akan dilaksanakan pada Hari Sabtu, 24 Oktober 2026 online.
        </Text>
      </View>
    </ScrollView>
  </View>
);

// ==========================================
// 2. SCREEN 2: PROFIL & STRUKTUR
// ==========================================
const ProfileScreen = () => (
  <View style={styles.pageContainer}>
    <ScrollView contentContainerStyle={styles.innerScroll}>
      <Text style={styles.sectionTitle}>Visi & Misi Organisasi</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎯 Visi</Text>
        <Text style={styles.cardText}>
          Mewujudkan HIMA Informatika yang solutif, kolaboratif, dan berdaya saing di bidang teknologi informasi.
        </Text>
        <Text style={[styles.cardTitle, { marginTop: 10 }]}>🚀 Misi</Text>
        <Text style={styles.cardText}>
          1. Meningkatkan kualitas akademik dan skill teknis.{'\n'}
          2. Membangun hubungan harmonis antar civitas akademika.{'\n'}
          3. Aktif berkontribusi dalam pengabdian masyarakat.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Pimpinan Organisasi</Text>
      <View style={styles.profileRow}>
        <View style={styles.profileBox}>
          <Image source={{ uri: MEMBER_DATA[0].image }} style={styles.avatarLarge} />
          <Text style={styles.profileName}>{MEMBER_DATA[0].name}</Text>
          <Text style={styles.profileRole}>{MEMBER_DATA[0].role}</Text>
        </View>
        <View style={styles.profileBox}>
          <Image source={{ uri: MEMBER_DATA[1].image }} style={styles.avatarLarge} />
          <Text style={styles.profileName}>{MEMBER_DATA[1].name}</Text>
          <Text style={styles.profileRole}>{MEMBER_DATA[1].role}</Text>
        </View>
      </View>
    </ScrollView>
  </View>
);

// ==========================================
// 3. SCREEN 3: PROGRAM KERJA
// ==========================================
const ProkerScreen = () => (
  <View style={styles.pageContainer}>
    <ScrollView contentContainerStyle={styles.innerScroll}>
      <Text style={styles.sectionTitle}>Agenda & Program Kerja 2026</Text>
      <FlatList
        data={PROKER_DATA}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.prokerCard}>
            <View style={styles.prokerHeader}>
              <Text style={styles.prokerTitle}>{item.title}</Text>
              <View style={[styles.badge, item.status === 'Ongoing' ? styles.badgeOngoing : styles.badgeUpcoming]}>
                <Text style={styles.badgeText}>{item.status}</Text>
              </View>
            </View>
            <Text style={styles.prokerDept}>📅 {item.date} | 🏛️ {item.dept}</Text>
          </View>
        )}
      />
    </ScrollView>
  </View>
);

// ==========================================
// 4. SCREEN 4: DETAIL EVENT
// ==========================================
const EventDetailScreen = () => (
  <View style={styles.pageContainer}>
    <ScrollView contentContainerStyle={styles.innerScroll}>
      <Text style={styles.sectionTitle}>Featured Event Detail</Text>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600' }}
          style={styles.eventImage}
        />
        <Text style={styles.eventTitle}>Seminar Nasional Tech 2026</Text>
        <Text style={styles.eventTag}>Tema: "AI & Future Web Development"</Text>
        <Text style={styles.cardText}>
          Seminar tahunan terbesar HIMA Informatika yang menghadirkan praktisi industri untuk membahas perkembangan AI dan Web modern.
        </Text>
        <View style={styles.divider} />
        <Text style={styles.detailInfo}>📍 Lokasi: Auditorium Utama lt. 3</Text>
        <Text style={styles.detailInfo}>⏰ Waktu: 08.00 WIB - Selesai</Text>
        <Text style={styles.detailInfo}>🎟️ Kuota: 200 Peserta (Gratis)</Text>
      </View>
    </ScrollView>
  </View>
);

// ==========================================
// 5. SCREEN 5: KONTAK & DIREKTORI
// ==========================================
const ContactScreen = () => (
  <View style={styles.pageContainer}>
    <ScrollView contentContainerStyle={styles.innerScroll}>
      <Text style={styles.sectionTitle}>Direktori Pengurus & Kontak</Text>
      {MEMBER_DATA.map((member) => (
        <View key={member.id} style={styles.contactCard}>
          <Image source={{ uri: member.image }} style={styles.avatarSmall} />
          <View style={styles.contactInfo}>
            <Text style={styles.contactName}>{member.name}</Text>
            <Text style={styles.contactRole}>{member.role}</Text>
            <Text style={styles.contactPhone}>📞 {member.phone}</Text>
          </View>
        </View>
      ))}

      <View style={[styles.card, { marginTop: 10 }]}>
        <Text style={styles.cardTitle}>📍 Sekretariat HIMA</Text>
        <Text style={styles.cardText}>Gedung Student Center Lt. 2, Kampus Utama.</Text>
        <Text style={styles.cardText}>Email: hima.if@univ.ac.id</Text>
      </View>
    </ScrollView>
  </View>
);

// ==========================================
// MAIN APP (MULTI-PAGE NAVIGASI)
// ==========================================
export default function App() {
  // Menggunakan useRef untuk mengontrol scroll (TANPA STATE)
  const scrollViewRef = useRef<ScrollView>(null);

  const navigateToPage = (pageIndex: number) => {
    scrollViewRef.current?.scrollTo({
      x: pageIndex * SCREEN_WIDTH,
      animated: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E293B" />

      {/* App Bar / Header */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>HIMA Management App</Text>
      </View>

      {/* Horizontal Paging ScrollView (5 Halaman Terpisah) */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        style={styles.horizontalScroll}
      >
        <HomeScreen />
        <ProfileScreen />
        <ProkerScreen />
        <EventDetailScreen />
        <ContactScreen />
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigateToPage(0)}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigateToPage(1)}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigateToPage(2)}>
          <Text style={styles.navIcon}>📅</Text>
          <Text style={styles.navText}>Proker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigateToPage(3)}>
          <Text style={styles.navIcon}>🎉</Text>
          <Text style={styles.navText}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigateToPage(4)}>
          <Text style={styles.navIcon}>📞</Text>
          <Text style={styles.navText}>Kontak</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ==========================================
// STYLESHEET
// ==========================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  appBar: {
    height: 55,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  appBarTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  horizontalScroll: {
    flex: 1,
  },
  pageContainer: {
    width: SCREEN_WIDTH,
    flex: 1,
  },
  innerScroll: {
    padding: 16,
    paddingBottom: 20,
  },
  headerBanner: {
    backgroundColor: '#2563EB',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  headerGreeting: {
    color: '#93C5FD',
    fontSize: 14,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#E0E7FF',
    fontSize: 13,
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  statLabel: {
    fontSize: 12,
    color: '#64748B',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 18,
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileBox: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  avatarLarge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  profileName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
  },
  profileRole: {
    fontSize: 11,
    color: '#2563EB',
    textAlign: 'center',
  },
  prokerCard: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  prokerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  prokerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E293B',
    flex: 1,
  },
  prokerDept: {
    fontSize: 12,
    color: '#64748B',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  badgeOngoing: {
    backgroundColor: '#FEF08A',
  },
  badgeUpcoming: {
    backgroundColor: '#DCFCE7',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  eventImage: {
    width: '100%',
    height: 140,
    borderRadius: 8,
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  eventTag: {
    fontSize: 12,
    color: '#2563EB',
    fontWeight: '600',
    marginBottom: 6,
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 8,
  },
  detailInfo: {
    fontSize: 12,
    color: '#475569',
    marginBottom: 2,
  },
  contactCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  avatarSmall: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 12,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  contactRole: {
    fontSize: 12,
    color: '#2563EB',
  },
  contactPhone: {
    fontSize: 11,
    color: '#64748B',
  },
  bottomBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#1E293B',
    borderTopWidth: 1,
    borderTopColor: '#334155',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  navIcon: {
    fontSize: 16,
    marginBottom: 2,
  },
  navText: {
    color: '#94A3B8',
    fontSize: 10,
  },
});